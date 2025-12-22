import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Theme } from '@/app/providers/ThemeProvider'
import RouterDecorator from '@/shared/config/storybook/decorators/Router.decorator'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { Button } from '../../../Button/Button'
import Dropdown from './Dropdown'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  decorators: [RouterDecorator()],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownDark: Story = {
  args: {
    trigger: <Button />,
    items: [
      { content: 'first', href: '/' },
      { content: 'second', href: '/' },
      { content: 'third', href: '/' },
      { content: 'four', href: '/' },
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const DropdownLight: Story = {
  args: {
    trigger: <Button />,
    items: [
      { content: 'first', href: '/' },
      { content: 'second', href: '/' },
      { content: 'third', href: '/' },
      { content: 'four', href: '/' },
    ],
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
