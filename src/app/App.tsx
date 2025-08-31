import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from 'entities/User';
import { getMounted } from 'entities/User/model/selectors/getMounted/getMounted';
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper';



function App() {
  
  const { theme } = useTheme()
 const dispatch = useDispatch()
 const _mounted = useSelector(getMounted)
 useEffect(() =>{
  dispatch(userAction.initAuthData())
 },[])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content_page'>
          <SideBar /> 
          <PageWrapper>
            {_mounted && <AppRouter />}
          </PageWrapper>
        </div>
      </Suspense>
    </div>
  )
}

export default App; 