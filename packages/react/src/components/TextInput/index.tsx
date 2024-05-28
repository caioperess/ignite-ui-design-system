import { VariantProps } from '@stitches/react'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'>,
    VariantProps<typeof TextInputContainer> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...rest }: TextInputProps, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextInputContainer>
    )
  },
)
TextInput.displayName = 'TextInput'
