import React, { memo } from 'react'
import { combine, withProfiler } from '@/hocs'
import { ChipClassnames } from './classnames'
import { type ChipProps } from './types'
import classnames from 'classnames'

function ChipComponent({ text, className, ...rest }: ChipProps): JSX.Element {
  return (
    <span {...rest} className={classnames(ChipClassnames.Chip, className)}>
      {text}
    </span>
  )
}

export const Chip = combine<ChipProps>([withProfiler], memo(ChipComponent), 'Chip')
