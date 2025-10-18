import React, { useCallback } from 'react'
import cl from './EditableProfileCardHeader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getAuthData } from 'entities/User'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/service/updateProfileData/uptadeProfileData'
import { HStack } from 'shared/ui/Stack'
import Button, { ButtonSize, ThemeButton } from 'shared/ui/Button/Button'

interface EditableProfileCardHeaderProps {
  className?: string
}

const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const profileData = useSelector(getProfileData)
  const authData = useSelector(getAuthData)
  const canEdit = profileData?.id === authData?.id
  const dispatch = useAppDispatch()

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
            <Button onClick={onEdit} className={cl.editBtn} theme={ThemeButton.OUTLINE}>
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

export default EditableProfileCardHeader
