import { AppRouter } from '@/app/providers/router'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderOptions {
  route?: string
  initialState?: StateSchema
  isAppRoute?: boolean
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/', initialState, isAppRoute } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      {isAppRoute && <AppRouter />}
      <StoreProvider initialState={initialState}>{component}</StoreProvider>
    </MemoryRouter>
  )
}
