import '@/styles/button.css'

import { type Meta, type StoryObj } from '@storybook/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'components/basic/Button',
  component: Button
}

export default meta

type ButtonStory = StoryObj<typeof Button>

export const Main: ButtonStory = {
  args: {
    children: 'View More'
  },
  render: (args) => <Button {...args} />
}

export const Mini: ButtonStory = {
  args: {
    children: 'Follow',
    presentation: 'mini'
  },
  render: (args) => <Button {...args} />
}
