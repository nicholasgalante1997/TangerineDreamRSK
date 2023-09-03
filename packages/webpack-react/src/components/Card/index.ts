import { combine, withProfiler } from '@/hocs'
import { CardComponent } from './Card'
import { type CardProps } from './types'
import { memo } from 'react'

const Card = combine<CardProps>([withProfiler<CardProps>], memo(CardComponent), 'card')
export { Card, type CardProps }
