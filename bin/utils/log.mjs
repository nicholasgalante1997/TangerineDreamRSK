import pino from 'pino'

export const logger = pino({
  name: 'TangerineDream/React',
  base: undefined,
  level: 'info',
  depthLimit: 3,
  timestamp: true,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
})