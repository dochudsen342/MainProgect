import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'widgets/PageLoader/ui/PageLoader'
import RequireAuth from './RequireAuth'

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
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    )
  }, [])
  return <Routes>{Object.values(routeConfig).map((route) => renderWidthWrapper(route))}</Routes>
}

export default AppRouter
