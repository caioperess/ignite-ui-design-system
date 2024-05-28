import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@ignite-call-ui-docs/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentType } from 'react'

const meta: Meta<TextInputProps> = {
  title: 'Form/Text Input',
  component: TextInput as ComponentType,
  tags: ['autodocs'],
  args: {
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: {
      type: 'string',
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    placeholder: {
      type: 'string',
    },
    prefix: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        <Text size="sm">Email address</Text>
        {Story()}
      </Box>
    ),
  ],
}
export default meta

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: Story = {
  args: { prefix: 'cal.com/', placeholder: 'your-username' },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
