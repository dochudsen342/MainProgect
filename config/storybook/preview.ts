import type { Preview } from '@storybook/react-webpack5'
import '@/app/styles/index.scss'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [],
}

export default preview
