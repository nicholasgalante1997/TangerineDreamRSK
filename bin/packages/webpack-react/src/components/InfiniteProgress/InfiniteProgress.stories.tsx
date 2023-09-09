import '@/styles/infinite-progress.css'
import { type Meta, type StoryObj } from '@storybook/react'
import { InfiniteProgress } from './InfiniteProgress'
import React from 'react'

const meta: Meta<typeof InfiniteProgress> = {
  title: 'components/loaders/Infinite Progress',
  component: InfiniteProgress
}

export default meta

type InfiniteProgressStory = StoryObj<typeof InfiniteProgress>

export const Small: InfiniteProgressStory = {
  args: {
    size: 'Small'
  },
  render: (args) => <InfiniteProgress {...args} />
}

export const Medium: InfiniteProgressStory = {
  args: {
    size: 'Medium'
  },
  render: (args) => <InfiniteProgress {...args} />
}

export const Large: InfiniteProgressStory = {
  args: {
    size: 'Large'
  },
  render: (args) => <InfiniteProgress {...args} />
}
