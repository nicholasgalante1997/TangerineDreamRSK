#!/usr/bin/env node

import { resolve } from 'path'
import { existsSync, copyFileSync, readdirSync, constants, mkdirSync } from 'fs'
import pino from 'pino'

const logger = pino({
  base: undefined,
  name: 'tangerine-dream-react-cli-logger',
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})

const commandLineArgumentsAsString = process.argv.slice(2)

if (commandLineArgumentsAsString.length !== 4) {
  const log = `
    *********************************************************************************************************
    Insufficient number of arguments supplied to copy.mjs. This script requires 2 flags. See below

    Usage: node copy.mjs -i <source-directory> -o <out-directory>

    Example: node copy.mjs -i src/styles -o build/
    *********************************************************************************************************
    `
  logger.warn(log)
  process.exit(1)
}

function getFlagValue(flag) {
  const indexOfInputFlag = commandLineArgumentsAsString.findIndex((value) => value === flag)
  if (indexOfInputFlag < 0) {
    return null
  }
  return commandLineArgumentsAsString[indexOfInputFlag + 1]
}

const inputDir = getFlagValue('-i')

const outputDir = getFlagValue('-o')

const inputRegexMatchOnly = getFlagValue('--input-matcher')

const inputDirPath = resolve(process.cwd(), inputDir)

if (!existsSync(inputDirPath)) {
  logger.error('Input directory does not exist')
  process.exit(1)
}

for (const file of readdirSync(inputDirPath)) {
  try {
    if (inputRegexMatchOnly) {
      const regexMatcher = new RegExp(inputRegexMatchOnly)
      if (!regexMatcher.test(file)) {
        logger.warn(`File ${file} excluded by rule ${inputRegexMatchOnly}`)
        continue
      }
    }
    const absoluteFilePath = resolve(inputDirPath, file)
    const outputPath = resolve(process.cwd(), outputDir, file)
    if (!existsSync(resolve(process.cwd(), outputDir))) {
      mkdirSync(resolve(process.cwd(), outputDir), { recursive: true })
    }
    copyFileSync(absoluteFilePath, outputPath, constants.COPYFILE_EXCL)
  } catch (e) {
    logger.error(e)
  }
}
