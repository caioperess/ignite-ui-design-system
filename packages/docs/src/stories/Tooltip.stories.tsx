import { Box, Button, Tooltip, TooltipProps } from '@ignite-call-ui-docs/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TooltipProps> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Hover me</Button>,
    title: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null!,
      },
    },
    open: {
      type: 'boolean',
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'transparent',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
}
export default meta

type Story = StoryObj<TooltipProps>

export const Primary: Story = {}
