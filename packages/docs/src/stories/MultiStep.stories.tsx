import { Box, MultiStep, MultiStepProps } from '@ignite-call-ui-docs/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<MultiStepProps> = {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
}
export default meta

type Story = StoryObj<MultiStepProps>

export const Primary: Story = {}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
