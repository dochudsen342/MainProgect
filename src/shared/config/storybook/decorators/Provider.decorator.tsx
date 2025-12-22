import { AnimationProvider } from '../../../lib/components/AnimationProvider'

const AnimationProviderDecorator = () => (Story: any) => {
  return (
    <AnimationProvider>
      <Story />
    </AnimationProvider>
  )
}

export default AnimationProviderDecorator
