import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Theme } from '@/app/providers/ThemeProvider'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { fn } from 'storybook/test'
import { Button } from './Button'

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
    theme: 'outline',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearInvertedDark: Story = {
  args: {
    children: 'Text',
    theme: 'clear_inverted',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearInvertedLight: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
