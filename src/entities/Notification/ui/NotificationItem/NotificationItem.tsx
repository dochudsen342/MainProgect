import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import { Notification } from '../../model/types/Notification'
import cl from './NotificationItem.module.scss'

interface NotificationItemProps {
  className?: string
  notification: Notification
}

const NotificationItem = ({ className, notification }: NotificationItemProps) => {
  const content = (
    <Card theme={CardTheme.OUTLINED} className={classNames(cl.NotificationItem, {}, [className])}>
      <Text title={notification.title} text={notification.description} />
    </Card>
  )

  if (notification.href) {
    return (
      <a className={cl.link} target='_blank'>
        {content}
      </a>
    )
  }
  return content
}

export default NotificationItem
