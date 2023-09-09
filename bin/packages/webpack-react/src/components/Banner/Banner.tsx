import React, { memo } from 'react'
import classNames from 'classnames'
import { Button } from '@/components'
import { combine } from '@/hocs'
import { showIf } from '@/utils'
import { BannerClassNames } from './componentMetadata'
import { type BannerProps } from './types'

function BannerComponent({ text, action, className, id, style = {} }: BannerProps): React.JSX.Element {
  return (
    <div style={style} id={id} className={classNames(BannerClassNames.Wrapper, className)}>
      <p className={BannerClassNames.Text}>{text}</p>
      &nbsp;
      {showIf(action, <Button onClick={action?.handler}>{action?.text}</Button>)}
    </div>
  )
}

/** coordinated css : @/styles/banner.css */
export const Banner = combine([], memo(BannerComponent), 'subscribe-banner')
