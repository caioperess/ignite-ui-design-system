import { ComponentProps } from '@stitches/react'
import { ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
})
Box.displayName = 'Box'

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
