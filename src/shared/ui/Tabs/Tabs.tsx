import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode, useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'
import cl from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick?: (tab: TabItem) => void
}

export const Tabs = ({ className, tabs, value, onTabClick }: TabsProps) => {
  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      if (onTabClick) {
        onTabClick?.(tab)
      }
    }
  }, [])
  return (
    <div className={classNames(cl.Tabs, {}, [className])}>
      {tabs.map((tabItem) => (
        <Card
          theme={tabItem.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          key={tabItem.value}
          onClick={clickHandle(tabItem)}
          className={cl.tab}
        >
          {tabItem.content}
        </Card>
      ))}
    </div>
  )
}
