import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!!
      setTimeout(() => resolve(import('./AdminPanelPage')), 1500)
    })
)
