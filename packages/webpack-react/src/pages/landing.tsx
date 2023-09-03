import { Hero } from '@/components'
import React, { memo } from 'react'
import { combine, withRootProviders, withRouteGuard } from '@/hocs'

function LandingPageComponent(): React.JSX.Element {
  return (
    <Hero
      text={{
        main: 'Tangerine Dream | React',
        submain: 'A react application built with the @tangerinedream/react starter kit.'
      }}
      actions={[
        {
          presentation: 'default',
          children: 'Read The Docs',
          onClick() {
            if (typeof window !== 'undefined') {
              window.open('', '_blank')
            }
          }
        }
      ]}
      image={{
        alt: '@tangerinedream/react logo',
        src: {
          main: ''
        }
      }}
    />
  )
}

export const LandingPage = combine(
  [withRouteGuard('index-page-route-v0.1'), withRootProviders],
  memo(LandingPageComponent),
  'landing-page'
)
