import { createWriteStream, existsSync, rmSync } from 'fs'
import pino from 'pino'
import tokens from './index.tokens.json' assert { type: 'json' }
import {
  AUTOGENERATED_FILE_DISCLAIMER,
  CLEAN,
  NEWLINE,
  tokenGroups,
  CSS_OUTFILE,
  TS_OUTFILE,
  TABCHAR
} from './constants.mjs'
import { crawlTokens } from './crawlTokens.mjs'
import { toTitleCase } from './strings.mjs'
import { drain } from './streams.mjs'

const logger = pino({
  name: '@tangerine-react-token-logger',
  base: undefined,
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})

async function mapTokenJsonToCss() {
  const cssExists = existsSync(CSS_OUTFILE)
  if (cssExists) {
    if (CLEAN) {
      rmSync(CSS_OUTFILE, { force: true, recursive: true })
    } else {
      throw new Error('FileExistsWithCleanFlagFalse')
    }
  }

  const cssFileStream = createWriteStream(CSS_OUTFILE, { encoding: 'utf-8' })
  cssFileStream.write(AUTOGENERATED_FILE_DISCLAIMER)
  cssFileStream.write(NEWLINE)
  cssFileStream.write(':root {')
  cssFileStream.write(NEWLINE + TABCHAR)

  for (const group of tokenGroups) {
    const tokenStrings = crawlTokens(tokens, group, 'css')
    for (const tokenString of tokenStrings) {
      const didWrite = cssFileStream.write(tokenString + NEWLINE + TABCHAR)
      if (!didWrite) {
        await drain(cssFileStream)
        cssFileStream.write(tokenString)
      }
    }
  }

  cssFileStream.write('}' + NEWLINE, async (err) => {
    if (err) {
      await drain(cssFileStream)
      cssFileStream.write('}', (err) => {
        if (err) {
          cssFileStream.end()
          console.error(err)
          rmSync(CSS_OUTFILE, { force: true, recursive: true })
          process.exit(1)
        }
        cssFileStream.end()
      })
    } else {
      cssFileStream.end()
    }
  })
}

async function mapTokenJsonToTypescript() {
  const typesExist = existsSync(TS_OUTFILE)
  if (typesExist) {
    if (CLEAN) {
      rmSync(TS_OUTFILE, { force: true, recursive: true })
    } else {
      throw new Error('FileExistsWithCleanFlagFalse')
    }
  }

  const typesFileStream = createWriteStream(TS_OUTFILE, { encoding: 'utf-8' })
  typesFileStream.write(AUTOGENERATED_FILE_DISCLAIMER)
  typesFileStream.write(NEWLINE)

  for (const group of tokenGroups) {
    typesFileStream.write(`export enum ${toTitleCase(group)} {`)
    typesFileStream.write(NEWLINE + TABCHAR)
    const tokenStrings = crawlTokens(tokens, group, 'ts-enums')
    for (const tokenString of tokenStrings) {
      const didWrite = typesFileStream.write(NEWLINE + TABCHAR + tokenString)
      if (!didWrite) {
        await drain(typesFileStream)
        typesFileStream.write(tokenString)
      }
    }
    typesFileStream.write(NEWLINE + '}' + NEWLINE)
  }

  typesFileStream.end()
}

async function build() {
  logger.info('Building styles and types from token json.')
  logger.info('Beginning "mapTokenJsonToCss" operation...')
  await mapTokenJsonToCss()
  logger.info('Complete. Finished writing to ' + CSS_OUTFILE)
  logger.info('Beginning "mapTokenJsonToTypescript" operations...')
  await mapTokenJsonToTypescript()
  logger.info('Complete! Finished writing to ' + TS_OUTFILE);
}

const start = performance.now()
await build()
logger.info(`Done. [Finished in ${performance.now() - start}ms]`)
