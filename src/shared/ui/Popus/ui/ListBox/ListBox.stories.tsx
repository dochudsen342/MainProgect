import type { Meta, StoryObj } from '@storybook/react-webpack5'

import ThemeDecorator from 'shared/lib/decorators/theme.decorator'
import { Theme } from 'app/providers/ThemeProvider'
import Listbox from './ListBox'

const meta = {
  title: 'shared/ListBox',
  component: Listbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Listbox>

export default meta
type Story = StoryObj<typeof meta>

export const ListboxDark: Story = {
  args: {
    items: [],
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const ListboxLight: Story = {
  args: {
    items: [],
    onChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
