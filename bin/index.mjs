#! /usr/bin/env node

import { Command } from 'commander'
import { existsSync, rmSync } from 'fs'
import { resolve } from 'path'
import inquirer from 'inquirer'
import degit from 'degit'
import { logger } from './utils/index.mjs'

const app = new Command()

app
  .name('Tangerine Dream | React Starter Kit')
  .description('Because getting React apps up and running should take seconds, not sprints.')
  .version('0.0.1')

app
  .command('react-app')
  .argument('<name>', 'the name of the application')
  .action(async function (appName) {
    if (appName === '') {
      logger.fatal('Supplied an empty string in place of "app-name". This is an invalid argument.')
      process.exit(1)
    }
    if (appExists(appName)) {
      logger.fatal('Supplied the name of an existing directory. This is an invalid argument.')
      process.exit(1)
    }
    let didError = false;
    try {
        const destination = resolve(process.cwd(), appName)
        const source = 'nicholasgalante1997/TangerineDreamRSK/packages/webpack-react'
        const degitEE = degit(source, {
          cache: false,
          force: true,
          verbose: true
        })
        degitEE.on('info', function (info) {
          logInfoObject(info)
        })
        await degitEE.clone(destination)
    } catch (e) {
      didError = true
      logger.error(e.message)
    } finally {
      if (didError) {
        logger.error('Failed to pull @nicholasgalante1997/TangerineDreamRSK#main. Cleaning up...')
        cleanOnDegitFailure()
        process.exit(1)
      } else {
        const log = `Created "Webpack-React" app successfully. Change directories to ${appName} and run \`pnpm install\` to get started.`
        logger.info(log)
      }
    }
  })

function appExists(appName) {
  return existsSync(resolve(process.cwd(), appName))
}

function logInfoObject(o) {
  for (const [k, v] of Object.entries(o)) {
    logger.info(`${k} = ${v}`)
  }
}

function cleanOnDegitFailure(appName) {
  if (existsSync(resolve(process.cwd(), appName))) {
    rmSync(resolve(process.cwd(), appName), { recursive: true, force: true })
  }
}

app.parse()