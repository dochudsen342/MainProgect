import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Theme } from '@/app/providers/ThemeProvider'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { fn } from 'storybook/test'
import { Spiner } from './Spiner'

const meta = {
  title: 'shared/Spiner',
  component: Spiner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Spiner>

export default meta
type Story = StoryObj<typeof meta>

export const SpinerDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const SpinerLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
