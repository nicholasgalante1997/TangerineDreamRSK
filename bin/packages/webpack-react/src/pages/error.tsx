import React, { memo } from 'react'
import { combine, withRootProviders, withRouteGuard } from '@/hocs'
import { ErrorCode } from '@/components'

function ErrorPageComponent(): React.JSX.Element {
  return <ErrorCode code={404} />
}

export const ErrorPage = combine(
  [withRouteGuard('error-page-route-v0.1'), withRootProviders],
  memo(ErrorPageComponent),
  'error-page-component'
)
