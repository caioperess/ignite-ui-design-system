import { styled } from '@/styles'
import { ComponentProps } from '@stitches/react'

export const TextArea = styled('textarea', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
TextArea.displayName = 'TextArea'

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
