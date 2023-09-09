const RouteKeyMapVersion = 0.1

export const RouteKeyMap = {
  ErrorPage: {
    key: `error-page-route-v${RouteKeyMapVersion}`,
    environments: {
      development: 'public',
      beta: 'public',
      gamma: 'public',
      production: 'public'
    }
  },
  LandingPage: {
    key: `index-page-route-v${RouteKeyMapVersion}`,
    environments: {
      development: 'public',
      beta: 'public',
      gamma: 'public',
      production: 'public'
    }
  }
} as const

export type RouteKey = (typeof RouteKeyMap)[keyof typeof RouteKeyMap]['key']
