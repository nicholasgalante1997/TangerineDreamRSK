export interface BannerProps {
  className?: string
  id?: string
  text: React.ReactNode | React.JSX.Element
  action?: {
    text: string
    handler: () => void | Promise<void>
  }
}
