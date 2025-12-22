import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDarkWithoutLable: Story = {
  args: {
    options: [
      { content: 'some text', value: 'some text' },
      { content: 'some text2', value: 'some text2' },
      { content: 'some text3', value: 'some text3' },
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const SelectLightWithoutLable: Story = {
  args: {
    options: [
      { content: 'some text', value: 'some text' },
      { content: 'some text2', value: 'some text2' },
      { content: 'some text3', value: 'some text3' },
    ],
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SelectDarkWithLable: Story = {
  args: {
    options: [
      { content: 'some text', value: 'some text' },
      { content: 'some text2', value: 'some text2' },
      { content: 'some text3', value: 'some text3' },
    ],
    label: 'TEXT:',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const SelectLightWithLable: Story = {
  args: {
    options: [
      { content: 'some text', value: 'some text' },
      { content: 'some text2', value: 'some text2' },
      { content: 'some text3', value: 'some text3' },
    ],
    label: 'TEXT:',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
