import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'widgets/PageLoader/ui/PageLoader'

const AppRouter = () => {
  return (
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense key={path} fallback={<PageLoader/>}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
  )
}

export default AppRouter
