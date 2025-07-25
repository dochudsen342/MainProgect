import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useDispatch } from 'react-redux';
import { userAction } from 'entities/User';



function App() {
  
  const { theme } = useTheme()
 const dispatch = useDispatch()
 useEffect(() =>{
  dispatch(userAction.initAuthData())
 },[])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content_page'>
          <SideBar />
          <div className='page-wrapper'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App; 