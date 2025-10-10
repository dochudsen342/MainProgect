module.exports = (
  layer,
  componentName
) => `import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'
import ${componentName} from './${componentName}'
import ThemeDecorator from 'shared/lib/decorators/theme.decorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: '${layer}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ${componentName}>

export default meta
type Story = StoryObj<typeof meta>

export const ${componentName}Light: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const ${componentName}Dark: Story = {
  args: {
    
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}`
