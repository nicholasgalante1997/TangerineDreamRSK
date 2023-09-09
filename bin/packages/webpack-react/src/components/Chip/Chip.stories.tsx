import '@/styles/chip.css'

import { type Meta, type StoryObj } from '@storybook/react'
import React from 'react'
import { Chip } from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'components/basic/Chip',
  component: Chip
}

export default meta

type ChipStory = StoryObj<typeof Chip>

export const Main: ChipStory = {
  args: {
    text: 'new'
  },
  render: (args) => <Chip {...args} />
}
