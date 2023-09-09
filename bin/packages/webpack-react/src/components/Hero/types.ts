import { type ButtonProps } from '../Button/types'

export interface HeroProps {
  text: {
    main: string
    submain: string
  }
  image?: {
    src: {
      main: string
    }
    alt: string
  }
  actions: ButtonProps[]
}
