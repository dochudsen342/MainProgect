import React, { useState } from 'react'
import cl from './NotificationButton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Popover } from 'shared/ui/Popus'
import Icon, { IconFill } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import NotificationIcon from 'shared/assets/icons/Notifications.svg'
import { useGetNotificationsList } from 'entities/Notification/api/notificationApi'
import Drawer from 'shared/ui/Drawer/Drawer'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton = ({ className }: NotificationButtonProps) => {
  const { data: Notifications, isLoading } = useGetNotificationsList(null, {
    pollingInterval: 10000,
  })
  const onOpenDrawer = () => {
    setIsOpen(true)
  }

  const onCloseDrawer = () => {
    setIsOpen(false)
  }
  const [isOpen, setIsOpen] = useState(false)
  const triger = (
    <Button theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} />
    </Button>
  )

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(cl.NotificationButton, {}, [className])}
          direction='bottom left'
          trigger={<Icon theme={IconFill.PRIMARY} Svg={NotificationIcon} />}
        >
          <NotificationList
            data={Notifications}
            isLoading={isLoading}
            className={cl.notification}
          />
        </Popover>
      </BrowserView>
      <MobileView>
        {triger}
        <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
          <NotificationList data={Notifications} isLoading={isLoading} />
        </Drawer>
      </MobileView>
    </div>
  )
}

export default NotificationButton
