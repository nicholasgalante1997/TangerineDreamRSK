#! /usr/bin/env node

import { Command } from 'commander'
import { existsSync, rmSync, mkdirSync } from 'fs'
import { resolve } from 'path'
import ncp from 'ncp'
import { logger } from './utils/index.mjs'
import pkg from '../package.json'

const app = new Command()

app
  .name('Tangerine Dream | React Starter Kit')
  .description('Because getting React apps up and running should take seconds, not sprints.')
  .version(pkg.version)

app
  .command('webpack-react')
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
    try {
      const destination = resolve(process.cwd(), appName)
      mkdirSync(destination)
      const source = resolve(getParentDirFromImportMetaUrl(), 'packages', 'webpack-react')
      await new Promise((resolve, reject) => {
        ncp(source, destination, (err) => {
          if (err) {
            reject(err)
            throw err
          }
          logger.info('Completed ncp action!')
          const log = `Created "Webpack-React" app successfully. Change directories to ${appName} and run \`pnpm install\` to get started.`
          logger.info(log)
          resolve()
        })
      })
    } catch (e) {
      logger.error(e.message)
      cleanOnDegitFailure()
      process.exit(1)
    }
  })

function appExists(appName) {
  return existsSync(resolve(process.cwd(), appName))
}

function getParentDirFromImportMetaUrl() {
  return import.meta.url
    .replace(/file:\/\//, '')
    .split('/')
    .slice(0, -1)
    .join('/')
}

function cleanOnDegitFailure(appName) {
  if (existsSync(resolve(process.cwd(), appName))) {
    rmSync(resolve(process.cwd(), appName), { recursive: true, force: true })
  }
}

app.parse()
