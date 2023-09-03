import pino from 'pino'

function logLevel(): pino.Level | 'silent' {
  if (process.env.NODE_ENV === 'production') {
    return 'silent'
  }
  return 'info'
}

export const logger = pino({
  name: 'evergreen-terrace',
  level: logLevel(),
  browser: {
    asObject: true
  }
})
