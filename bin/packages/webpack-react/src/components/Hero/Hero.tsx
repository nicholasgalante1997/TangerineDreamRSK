import React, { memo } from 'react'
import { combine } from '@/hocs'
import { HeroImageClassnames } from './componentMetadata'
import { type HeroProps } from './types'
import classnames from 'classnames'
import { Button } from '../Button'
import { type ButtonProps } from '../Button/types'
import { showIf } from '@/utils'

function HeroComponent({ actions, text: { main, submain }, image }: HeroProps): JSX.Element {
  const titleClassname = classnames(HeroImageClassnames.Title, 'chunk')
  const textClassname = classnames(HeroImageClassnames.Text, 'ls')
  const actionToButton = (props: ButtonProps): React.JSX.Element => <Button {...props} />
  return (
    <div className={HeroImageClassnames.Container}>
      <div className={HeroImageClassnames.MiniCol}>
        <h6 className={titleClassname}>{main}</h6>
        <p className={textClassname}>{submain}</p>
        <div className={HeroImageClassnames.Row}>{actions.map(actionToButton)}</div>
      </div>
      {showIf(image, <img src={image?.src.main} alt={image?.alt} className={HeroImageClassnames.Image} />)}
    </div>
  )
}

export const Hero = combine<HeroProps>([], memo(HeroComponent), 'lp-hero')
