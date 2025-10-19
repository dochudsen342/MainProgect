import React from 'react'
import cl from './NotificationList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useGetNotificationsList } from '../../api/notificationApi'
import { VStack } from 'shared/ui/Stack'
import NotificationItem from '../NotificationItem/NotificationItem'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { Notification } from '../../model/types/Notification'

interface NotificationListProps {
  className?: string
  isLoading: boolean
  data?: Notification[]
}

const NotificationList = ({ className, isLoading, data }: NotificationListProps) => {
  if (isLoading) {
    return (
      <VStack gap='16' max className={classNames(cl.NotificationList, {}, [className])}>
        <Skeleton className={cl.notificationItem} height={'120px'} border='8px' width={'100%'} />
        <Skeleton className={cl.notificationItem} height={'120px'} border='8px' width={'100%'} />
        <Skeleton className={cl.notificationItem} height={'120px'} border='8px' width={'100%'} />
      </VStack>
    )
  }
  return (
    <VStack gap='16' max className={classNames(cl.NotificationList, {}, [className])}>
      {data?.map((item) => (
        <NotificationItem key={item.id} notification={item} />
      ))}
    </VStack>
  )
}

export default NotificationList
