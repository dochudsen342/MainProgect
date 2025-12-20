import type { Meta, StoryObj } from '@storybook/react-webpack5'

import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { Theme } from '@/app/providers/ThemeProvider'
import Text, { TextAligin, TextSize } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const TextDark: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const TextLight: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const TextLightCentre: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    aligin: TextAligin.CENTRE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const TextDarkCentre: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    aligin: TextAligin.CENTRE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const TextDarkSizeL: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    size: TextSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const TextLightSizeL: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    size: TextSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
