import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Theme } from '@/app/providers/ThemeProvider'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { Text } from './Text'

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
    aligin: 'centre',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const TextDarkCentre: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    aligin: 'centre',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const TextDarkSizeL: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    size: 'size_L',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const TextLightSizeL: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    size: 'size_L',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
