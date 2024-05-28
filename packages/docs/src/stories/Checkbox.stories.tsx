import { Box, Checkbox, CheckboxProps, Text } from '@caio-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<CheckboxProps> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    children: 'Send',
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
        {Story({
          args: {
            id: 'checkbox',
          },
        })}
        <Text as="label" size="sm" htmlFor="checkbox">
          Accept terms of use
        </Text>
      </Box>
    ),
  ],
}
export default meta

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {}
