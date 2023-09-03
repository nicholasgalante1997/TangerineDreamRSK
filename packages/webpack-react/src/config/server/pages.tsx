import { ErrorPage, LandingPage } from '@/pages'
import { type PageConfig } from '@/types'

export const staticPages: Array<PageConfig<any>> = [
  {
    bundle: 'landing',
    component: LandingPage,
    title: '%APP%',
    description:
      "An anthology of short stories by new American authors. We are currently accepting submissions for our first season's release.",
    htmlFileName: 'index',
    styles: ['landing-page']
  },
  {
    bundle: 'error',
    component: ErrorPage,
    title: 'The Couch Gag, 404 Page',
    description: 'The Couch Gag fallback page',
    htmlFileName: '404',
    styles: []
  }
]
