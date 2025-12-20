import { BrowserRouter } from 'react-router-dom'

const RouterDecorator = () => (Story: any) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}

export default RouterDecorator
