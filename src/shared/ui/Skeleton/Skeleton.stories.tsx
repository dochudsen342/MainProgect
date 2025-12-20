import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import { Theme } from '@/app/providers/ThemeProvider'
import Skeleton from './Skeleton'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'

const meta = {
  title: 'shared/Sleleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const SkeletonAvatarDark: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const SkeletonAvatarLight: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SkeletonTextDark: Story = {
  args: {
    width: 300,
    height: 20,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const SkeletonTextLight: Story = {
  args: {
    width: 300,
    height: 20,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
