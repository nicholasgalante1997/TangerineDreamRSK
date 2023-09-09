import { combine, withProfiler } from '@/hocs'
import { CardGridComponent } from './CardGrid'
import { memo } from 'react'

const CardGrid = combine([withProfiler], memo(CardGridComponent), 'card-grid')

export { CardGrid }
