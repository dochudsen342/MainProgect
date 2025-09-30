import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import ThemeDecorator from 'shared/lib/decorators/theme.decorator'
import { Theme } from 'app/providers/ThemeProvider'
import Avatar from './Avatar'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarDark: Story = {
  args: {
    src: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1BqQp8.img?w=3000&h=2000&m=4&q=74',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const AvatarLight: Story = {
  args: {
    src: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1BqQp8.img?w=3000&h=2000&m=4&q=74',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
