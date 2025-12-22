import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSideBarItems } from '../../model/selectors/getSideBarItems'
import SideBarItem from '../SideBarItem/SideBarItem'
import cl from './SideBar.module.scss'

interface SideBarProps {
  className?: string
}

const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  const sideBarItemsList = useSelector(getSideBarItems)
  const linkList = useMemo(
    () =>
      sideBarItemsList.map((item) => (
        <SideBarItem collapsed={collapsed} item={item} key={item.path} />
      )),
    [collapsed, sideBarItemsList]
  )

  return (
    <aside
      data-testid='sidebar'
      className={classNames(cl.SideBar, { [cl.collapsed]: collapsed }, [className])}
    >
      <Button
        square={false}
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={cl.SideBarBtn}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack max role='navigation' gap='8' className={cl.items}>
        {linkList}
      </VStack>
      <div className={classNames(cl.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher collapsed={collapsed} />
      </div>
    </aside>
  )
})

export default SideBar
