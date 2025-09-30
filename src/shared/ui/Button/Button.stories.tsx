import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import Button, { ThemeButton } from './Button'
import ThemeDecorator from 'shared/lib/decorators/theme.decorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearInvertedDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearInvertedLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
