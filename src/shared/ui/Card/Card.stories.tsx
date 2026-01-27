import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Theme } from '@/app/providers/ThemeProvider'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { fn } from 'storybook/test'
import { Text } from '../Text/Text'
import { Card } from './Card'

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDark: Story = {
  args: {
    children: <Text aligin='centre' title='TITLE' text='TEXT' />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const PrimaryLight: Story = {
  args: {
    children: <Text aligin='centre' title='TITLE' text='TEXT' />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
