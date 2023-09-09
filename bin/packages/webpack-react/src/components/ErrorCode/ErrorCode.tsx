import React, { memo, useEffect } from 'react'
import { combine } from '@/hocs'
import { FourZeroOneComponentClassNames } from './classnames'
import { type FourZeroOneComponentProps } from './types'

function ErrorCodeComponent({
  code,
  id,
  error
}: FourZeroOneComponentProps): React.JSX.Element | React.ReactNode {
  useEffect(() => {
    if (code === 401) {
      window.location.hash = 'UnauthorizedAttemptToViewContent'
    } else if (id) {
      window.location.hash = id
    }
    return () => {
      window.location.hash = ''
    }
  }, [])
  return (
    <div className={FourZeroOneComponentClassNames.Wrapper}>
      <div className={FourZeroOneComponentClassNames.ContentBox}>
        <span className={FourZeroOneComponentClassNames.ErrorCode}>{code}</span>
        <div className={FourZeroOneComponentClassNames.VerticalLine} />
        <span className={FourZeroOneComponentClassNames.ScriptedText}>
          {error ?? "We hope you find what you're looking for, but it likely won't be here."}
        </span>
      </div>
    </div>
  )
}

export const ErrorCode = combine<FourZeroOneComponentProps>(
  [],
  memo(ErrorCodeComponent),
  '401-unauthorized-exception-component'
)
