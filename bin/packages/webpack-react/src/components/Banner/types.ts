import { WithStyles } from "@/types"

export type BannerProps = WithStyles & {
  className?: string
  id?: string
  text: React.ReactNode | React.JSX.Element
  action?: {
    text: string
    handler: () => void | Promise<void>
  }
}
