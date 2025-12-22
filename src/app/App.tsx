import { useTheme } from '@/app/providers/ThemeProvider'
import { AppRouter } from '@/app/providers/router'
import { userAction } from '@/entities/User'
import { getMounted } from '@/entities/User/model/selectors/getMounted/getMounted'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { SideBar } from '@/widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const _mounted = useSelector(getMounted)
  useEffect(() => {
    dispatch(userAction.initAuthData())
  }, [])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content_page'>
          <SideBar />
          <div className='routerWrapper'>{_mounted && <AppRouter />}</div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
