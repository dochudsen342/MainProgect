import React, { Children, Suspense, useEffect, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';


function App() {
  
  const { theme } = useTheme()
  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <Modal onClose={() => setIsOpen(false)} isOpen = {isOpen}>askasjdlkasd alsdkjqkq asldjznxnca qlwjelkja alsjdlzncla qwjelajwln lcnalnsl qlwndlna lqnwldnq lnqwdlnql dqlndwlkn</Modal>
        <button onClick={() => setIsOpen(true)}>toggle</button>
        <div className='content_page'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App; 