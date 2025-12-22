import type { Meta, StoryObj } from '@storybook/react-webpack5'

import ThemeDecorator from '@/shared/config/storybook/decorators/theme.decorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StarRating } from './StarRating'
import AnimationProviderDecorator from '@/shared/config/storybook/decorators/Provider.decorator'
import RouterDecorator from '@/shared/config/storybook/decorators/Router.decorator'
const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [AnimationProviderDecorator(), RouterDecorator()],
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const StarRatingDark: Story = {
  args: {
    selectedStars: 4,
    size: 50,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const StarRatingLight: Story = {
  args: {
    selectedStars: 2,
    size: 50,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
