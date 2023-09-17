import { ErrorPage, LandingPage } from '@/pages'
import { type PageConfig } from '@/types'

export const staticPages: Array<PageConfig<any>> = [
  {
    bundle: 'landing',
    component: LandingPage,
    title: '@tangerine-dream react-webpack app',
    description: "A modern frontend starter kit with react and webpack",
    htmlFileName: 'index',
    styles: ['landing-page']
  },
  {
    bundle: 'error',
    component: ErrorPage,
    title: '@tangerine-dream 404 Page',
    description: 'ound',
    htmlFileName: '404',
    styles: []
  }
]
