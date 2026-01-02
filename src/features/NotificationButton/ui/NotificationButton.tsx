import { NotificationList } from '@/entities/Notification'
import { useGetNotificationsList } from '@/entities/Notification/api/notificationApi'
import NotificationIcon from '@/shared/assets/icons/Notifications.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Icon, IconFill } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popus'
import { memo, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import cl from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton = memo(({ className }: NotificationButtonProps) => {
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
        <AnimationProvider>
          <Drawer lazy={true} onClose={onCloseDrawer} isOpen={isOpen}>
            <NotificationList data={Notifications} isLoading={isLoading} />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  )
})

export default NotificationButton
