import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Theme } from '@/app/providers/ThemeProvider'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { Input } from '@/shared/ui/Input'
import { fn } from 'storybook/test'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputDark: Story = {
  args: {
    placeholder: 'some text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const InputLight: Story = {
  args: {
    placeholder: 'some text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
