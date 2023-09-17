import { hydrateRoot, createRoot } from 'react-dom/client'
import { logger } from './logger'

interface MountOnErrorConfig {
  log?: boolean
  handler?: (e: any) => void | Promise<void>
}

export function mount(
  elementId: string,
  Component: React.ReactNode,
  onErrorConfig?: MountOnErrorConfig
): void {
  try {
    if (process.env.NODE_ENV === 'development') {
      let element = document.getElementById(elementId)
      if (element == null) {
        element = document.createElement('div')
        element.id = elementId
        document.body.appendChild(element)
      }
      const root = createRoot(element)
      root.render(Component)
    } else {
      hydrateRoot(document.getElementById('entrypoint')!, Component)
    }
  } catch (e) {
    if (onErrorConfig) {
      const { handler, log } = onErrorConfig
      log && logger.error(e)
      handler && handler(e)
    }
  }
}
