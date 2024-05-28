import { Box, BoxProps, Text } from '@caio-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null!,
      },
    },
  },
}
export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
