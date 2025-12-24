import { getAuthData, isUserAdmin, isUserManager, userAction } from '@/entities/User'
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popus'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

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
          href: getRouteProfile(userAuthData?.id),
        },
        { content: t('Выйти'), onClick: onLogout, href: '' },
        ...(isAdminPanelAvalible ? [{ content: t('Админка'), href: getRouteAdminPanel() }] : []),
      ]}
      trigger={<Avatar size={30} src={userAuthData.avatar} />}
    />
  )
}

export default AvatarDropdown
