import { useCallback } from 'react'
import cl from './ProfilePageHeader.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageHeaderProps {
    className?: string,
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile")
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const test = true
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onApplyEdit = useCallback(() =>{
        dispatch(updateProfileData())
    },[dispatch])

    return (
        <div className={cl.header}>
            <span>{t('Профиль')}</span>
            {readonly ? <Button onClick={onEdit} className={cl.editButton} theme={ThemeButton.OUTLINE}>
                {t('Редактировать')}
            </Button> : <div className={cl.header_button}>
                <Button onClick={onCancelEdit} className={cl.cancelEditButton}>
                    {t('Отменить')}
                </Button>
                <Button onClick={onApplyEdit} className={cl.applyButton}>
                    {t('Применить')}
                </Button>
            </div>}
        </div>
    )
}

export default ProfilePageHeader