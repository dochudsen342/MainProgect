import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import EditableProfileCard from './EditableProfileCard'
import ThemeDecorator from '@/shared/lib/decorators/theme.decorator'
import { Theme } from '@/app/providers/ThemeProvider'

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof EditableProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const EditableProfileCardLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const EditableProfileCardDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
