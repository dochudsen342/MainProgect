import { useContext, useState } from 'react';
import './styles/index.scss'
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/ClassNames';


function App() {
 
  const {theme,toggleTheme} = useTheme()
  
  return ( 
    <div className={classNames('app',{},[theme])}>
        <button onClick={toggleTheme}>Сменить тему</button>
    </div>
    
  )   
}

export default App;