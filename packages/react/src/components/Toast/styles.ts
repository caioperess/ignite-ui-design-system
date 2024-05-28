import { keyframes, styled } from '@/styles'
import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 32

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
})

export const Root = styled(Toast.Root, {
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: `translateX(var(--radix-toast-swipe-move-x))`,
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})

export const Description = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
  marginTop: '$1',
})

export const Close = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  background: 'none',
  border: 'none',
  color: '$gray200',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
