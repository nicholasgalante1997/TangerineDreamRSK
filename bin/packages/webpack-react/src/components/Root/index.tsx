import { I18NProvider, WorkerContextProvider } from '@/contexts'
import React, { memo } from 'react'

function PageComponent({
  children,
  id
}: {
  children: React.ReactNode
  id: string
}): React.JSX.Element {
  return (
    <I18NProvider>
      <WorkerContextProvider>
        <div id={id} className="page">
          {children}
        </div>
      </WorkerContextProvider>
    </I18NProvider>
  )
}

export const Root = memo(PageComponent)
