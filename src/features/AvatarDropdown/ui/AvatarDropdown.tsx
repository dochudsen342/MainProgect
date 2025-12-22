import React, { useCallback } from 'react'
import { Dropdown } from '@/shared/ui/Popus'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import Avatar from '@/shared/ui/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { getAuthData, isUserAdmin, isUserManager, userAction } from '@/entities/User'
import { useTranslation } from 'react-i18next'
import { RoutePath } from '@/shared/const/router'

interface AvatarDropdownProps {
  className?: string
  setIsModalAuth: (state: boolean) => void
}

const AvatarDropdown = ({ className, setIsModalAuth }: AvatarDropdownProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const userAuthData = useSelector(getAuthData)

  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvalible = isAdmin || isManager

  const onLogout = useCallback(() => {
    dispatch(userAction.logout())
    setIsModalAuth(false)
  }, [dispatch])

  if (!userAuthData) {
    return null
  }

  return (
    <Dropdown
      direction='bottom left'
      items={[
        {
          content: t('Профиль'),
          href: RoutePath.profile + userAuthData?.id,
        },
        { content: t('Выйти'), onClick: onLogout, href: '' },
        ...(isAdminPanelAvalible ? [{ content: t('Админка'), href: RoutePath.admin_panel }] : []),
      ]}
      trigger={<Avatar size={30} src={userAuthData.avatar} />}
    />
  )
}

export default AvatarDropdown
