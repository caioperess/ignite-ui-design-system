import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'

import * as S from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  children: ReactNode
  title: string | ReactNode
}

export function Tooltip({ children, title, ...props }: Readonly<TooltipProps>) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <S.Content>
            {title}
            <S.Arrow />
          </S.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
Tooltip.displayName = 'Tooltip'
