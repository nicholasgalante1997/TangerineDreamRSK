import { type Meta, type StoryObj } from '@storybook/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { ErrorCode } from './ErrorCode'

const meta: Meta<typeof ErrorCode> = {
  title: 'components/page/ErrorCode',
  component: ErrorCode
}

export default meta

type ErrorCodeStory = StoryObj<typeof ErrorCode>

export const Main: ErrorCodeStory = {
  args: {
    code: 404,
    error: "We don't know that page, sounds cool though.",
    id: '404'
  }
}
