import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import ThemeDecorator from 'shared/lib/decorators/theme.decorator'
import { Theme } from 'app/providers/ThemeProvider'
import Input from './Input'

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
