import { Heading, HeadingProps } from '@caio-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children: 'Custom title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl'],
      control: 'select',
    },
  },
}
export default meta

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão Heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
