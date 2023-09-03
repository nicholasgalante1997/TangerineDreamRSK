import { createRoot } from 'react-dom/client'
import { logger } from './logger';

interface MountOnErrorConfig {
  log?: boolean
  handler?: (e: any) => void | Promise<void>
}

export function mount(elementId: string, Component: React.ReactNode, onErrorConfig?: MountOnErrorConfig): void {
  try {
    let element = document.getElementById(elementId);
    if (element == null) {
      element = document.createElement('div')
      element.id = elementId
      document.body.appendChild(element)
    }
    const root = createRoot(element)
    root.render(Component)
  } catch (e) {
    if (onErrorConfig) {
      const { handler, log } = onErrorConfig
      log && logger.error(e)
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      handler && handler(e)
    }
  }
}
