import type { Meta, StoryObj } from '@storybook/react-webpack5'

import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { Theme } from '@/app/providers/ThemeProvider'
import AnimationProviderDecorator from '@/shared/config/storybook/decorators/Provider.decorator'
import RouterDecorator from '@/shared/config/storybook/decorators/Router.decorator'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [AnimationProviderDecorator(), RouterDecorator()],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalOpenDarkTheme: Story = {
  args: {
    isOpen: true,
    children: <div>Тестовый текст</div>,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ModalOpenLightTheme: Story = {
  args: {
    isOpen: true,
    children: <div>Тестовый текст</div>,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
