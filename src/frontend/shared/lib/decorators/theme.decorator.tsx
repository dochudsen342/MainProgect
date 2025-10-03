import { Theme } from 'app/providers/ThemeProvider'

const ThemeDecorator = (theme: Theme) => (Story: any) => {
  return (
    <div
      className={`app ${theme}`}
      style={{
        width: '100vh',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Story />
    </div>
  )
}

export default ThemeDecorator
