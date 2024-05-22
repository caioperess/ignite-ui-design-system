import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/diego3g.png',
    alt: 'Diego Fernandes',
  },
}
export default meta

type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}