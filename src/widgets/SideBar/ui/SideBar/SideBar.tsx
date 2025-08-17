import { memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import SideBarItem from '../SideBarItem/SideBarItem'
import cl from './SideBar.module.scss'
import { useSelector } from 'react-redux'
import { getSideBarItems } from 'widgets/SideBar/model/selectors/getSideBarItems'

interface SideBarProps {
  className?: string,
}



const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  const sideBarItemsList = useSelector(getSideBarItems)
  const linkList = useMemo(() => sideBarItemsList.map((item) =>
    <SideBarItem
      collapsed={collapsed}
      item={item} 
      key={item.path}
      />)
  ,[collapsed])

  return (
    <div className={classNames(cl.SideBar, { [cl.collapsed]: collapsed }, [className || ''])}>
      <Button
        square={false}
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={cl.SideBarBtn}>
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cl.items}>
        {linkList}
      </div>
      <div className={classNames(cl.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher collapsed = {collapsed}/>
      </div>
    </div>
  )
})

export default SideBar
