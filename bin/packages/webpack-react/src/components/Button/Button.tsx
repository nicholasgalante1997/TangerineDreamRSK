import React, { memo } from 'react'
import { ButtonClassNames } from './classnames'
import { type ButtonProps } from './types'
import classNames from 'classnames'
import { combine } from '@/hocs'

function ButtonComponent({
  className,
  presentation = 'default',
  children,
  ...rest
}: ButtonProps): React.ReactNode | React.JSX.Element {
  return (
    <button
      className={classNames(
        className,
        presentation === 'default' ? ButtonClassNames.default : ButtonClassNames.mini
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export const Button = combine([], memo(ButtonComponent), 'button')
