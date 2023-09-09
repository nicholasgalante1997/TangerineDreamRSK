import React, { memo } from 'react'
import { InfiniteProgressClassNames } from './classnames'
import { InfiniteProgressDataAttributes } from './data-attributes'

interface InfiniteProgressProps {
  size: keyof (typeof InfiniteProgressDataAttributes)['Size']
}

function InfiniteProgressComponent(props: InfiniteProgressProps): React.JSX.Element {
  return (
    <div
      className={InfiniteProgressClassNames.Progress}
      data-size={InfiniteProgressDataAttributes.Size[props.size]}
    />
  )
}

export const InfiniteProgress = memo(InfiniteProgressComponent)
