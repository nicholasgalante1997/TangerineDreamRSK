import '@/styles/banner.css'

import { type Meta, type StoryObj } from '@storybook/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'components/basic/Banner',
  component: Banner
}

export default meta

type BannerStory = StoryObj<typeof Banner>

export const Main: BannerStory = {
  args: {
    text: 'View our sale items! Deals as high as 50% off!',
    action: {
      text: 'Learn More',
      handler: () => alert('Opening sale page...')
    }
  }
}
