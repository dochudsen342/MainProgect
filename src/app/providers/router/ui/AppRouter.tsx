import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLoader from '@/widgets/PageLoader/ui/PageLoader'
import RequireAuth from './RequireAuth'
import { AppRouteProps, routeConfig } from '../config/routeConfig'

const AppRouter = () => {
  const renderWidthWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense key={route.path} fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element
        }
      />
    )
  }, [])
  return <Routes>{Object.values(routeConfig).map((route) => renderWidthWrapper(route))}</Routes>
}

export default AppRouter
