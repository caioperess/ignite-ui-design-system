import { styled } from '@/styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const Content = styled(Tooltip.Content, {
  background: '$gray900',
  color: '$gray100',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',

  borderRadius: '$sm',
  padding: '$3 $4',

  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2',
})
