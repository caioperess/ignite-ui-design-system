import { Toast, ToastProps } from '@ignite-call-ui-docs/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ToastProps> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'This is a toast',
    description: 'A beautiful toast',
    duration: 5000,
  },
  argTypes: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    duration: {
      type: 'number',
    },
  },
}
export default meta

type Story = StoryObj<ToastProps>

export const Primary: Story = {}
