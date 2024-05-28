import { X } from '@phosphor-icons/react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { ComponentProps } from '@stitches/react'
import * as S from './styles'

export interface ToastProps extends ComponentProps<typeof S.Root> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: Readonly<ToastProps>) {
  return (
    <ToastPrimitive.Provider>
      <S.Root {...props}>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.Close>
          <X size={20} weight="light" cursor="pointer" />
        </S.Close>
      </S.Root>

      <S.Viewport />
    </ToastPrimitive.Provider>
  )
}
Toast.displayName = 'Toast'
