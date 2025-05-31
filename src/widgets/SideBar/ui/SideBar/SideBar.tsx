import React, { useState } from 'react'
import cl from './SideBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface SideBarProps {
  className?:string,
}

const SideBar = ({className}:SideBarProps) => {
  const [collapsed,setCollapsed] = useState(false)

  const onToggle = () =>{
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cl.SideBar,{[cl.collapsed]:collapsed},[className])}>
      <button onClick={onToggle}>toggle</button>
       <div className={classNames(cl.switchers)}>
        <ThemeSwitcher/>
        {/* LangSwitcher*/}
       </div>
    </div>
  )
}

export default SideBar
