import React from 'react'
import cl from './NotificationButton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Popover } from 'shared/ui/Popus'
import Icon, { IconFill } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import NotificationIcon from 'shared/assets/icons/Notifications.svg'
import { useGetNotificationsList } from 'entities/Notification/api/notificationApi'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton = ({ className }: NotificationButtonProps) => {
  const { data: Notifications, isLoading } = useGetNotificationsList(null, {
    pollingInterval: 5000,
  })
  return (
    <Popover
      className={classNames(cl.NotificationButton, {}, [className])}
      direction='bottom left'
      trigger={<Icon theme={IconFill.PRIMARY} Svg={NotificationIcon} />}
    >
      <NotificationList data={Notifications} isLoading={isLoading} className={cl.notification} />
    </Popover>
  )
}

export default NotificationButton
