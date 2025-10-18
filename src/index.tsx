import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/StoreProvider'
import './shared/config/i18n/i18n'

const container = document.querySelector('#root')
if (!container) {
  throw Error('Не удалось ')
}
const root = ReactDOM.createRoot(container)

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
)
