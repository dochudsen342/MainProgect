import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { memo } from 'react'
import { Notification } from '../../model/types/Notification'
import NotificationItem from '../NotificationItem/NotificationItem'
import cl from './NotificationList.module.scss'

interface NotificationListProps {
  className?: string
  isLoading: boolean
  data?: Notification[]
}

const NotificationList = memo(({ className, isLoading, data }: NotificationListProps) => {
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
})

export default NotificationList
