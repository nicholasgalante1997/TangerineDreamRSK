import React, { memo } from 'react'
import { BannerClassNames } from './classnames'
import { type BannerProps } from './types'
import { Button } from '@/components'
import classNames from 'classnames'
import { combine } from '@/hocs'
import { showIf } from '@/utils'

function BannerComponent({ text, action, className, id }: BannerProps): React.JSX.Element {
  return (
    <div id={id} className={classNames(BannerClassNames.Wrapper, className)}>
      <p className={BannerClassNames.Text}>{text}</p>
      &nbsp;
      {showIf(action, <Button onClick={action?.handler}>{action?.text}</Button>)}
    </div>
  )
}

export const Banner = combine([], memo(BannerComponent), 'subscribe-banner')
