import type { Meta, StoryObj } from '@storybook/react-webpack5'

import ThemeDecorator from 'shared/lib/decorators/theme.decorator'
import { Theme } from 'app/providers/ThemeProvider'
import Dropdown from './Dropdown'
import Button from '../Button/Button'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
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
