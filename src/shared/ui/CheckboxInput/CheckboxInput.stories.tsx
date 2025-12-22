import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import { Theme } from '@/app/providers/ThemeProvider'
import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { CheckboxInput } from './CheckboxInput'

const meta = {
  title: 'shared/CheckboxInput',
  component: CheckboxInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxInput>

export default meta
type Story = StoryObj<typeof meta>

export const CheackBoxInputDark: Story = {
  args: {
    chekboxText: 'Тестовый выбор',
    value: 'Тестовый выбор',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const CheackBoxInputLight: Story = {
  args: {
    chekboxText: 'Тестовый выбор',
    value: 'Тестовый выбор',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const CheackBoxInputIsCheckedLight: Story = {
  args: {
    chekboxText: 'Тестовый выбор',
    value: 'Тестовый выбор',
    isChecked: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const CheackBoxInputIsCheckedDark: Story = {
  args: {
    chekboxText: 'Тестовый выбор',
    value: 'Тестовый выбор',
    isChecked: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
