import React, { useCallback } from 'react'
import cl from './ProfilePageHeader.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  const profileData = useSelector(getProfileData)
  const authData = useSelector(getAuthData)
  const canEdit = profileData?.id === authData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onApplyEdit = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack justify='between' max>
      <span>{t('Профиль')}</span>
      {canEdit && (
        <>
          {readonly ? (
            <Button onClick={onEdit} theme={ThemeButton.OUTLINE}>
              {t('Редактировать')}
            </Button>
          ) : (
            <HStack gap='8'>
              <Button onClick={onCancelEdit} className={cl.cancelEditButton}>
                {t('Отменить')}
              </Button>
              <Button onClick={onApplyEdit} className={cl.applyButton}>
                {t('Применить')}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  )
}

export default ProfilePageHeader
