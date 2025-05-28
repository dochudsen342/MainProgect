import { useContext, useState } from 'react';
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';


function App() {
 
  const {theme,toggleTheme} = useTheme()
  
  return ( 
    <div className={classNames('app',{},[theme])}>
        <button onClick={toggleTheme}>Сменить тему</button>
    </div>
    
  )   
}

export default App; 