import React, { Suspense } from 'react';
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () =>{
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return <div>
    <h1>{t('Welcome to React')}</h1>
    <button onClick={toggleLanguage}>{t('Перевод')}</button>
  </div>
}

function App() {
  
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <MyComponent></MyComponent>
        <Navbar />
        <div className='content_page'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App; 