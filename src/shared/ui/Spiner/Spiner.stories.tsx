import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import ThemeDecorator from 'shared/lib/decorators/theme.decorator'
import { Theme } from 'app/providers/ThemeProvider'
import Spiner from './Spiner'

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
