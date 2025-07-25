import React from 'react'
import cl from './ProfilePageHeader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface ProfilePageHeaderProps {
    className?: string,
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const {t} = useTranslation()
    return (
        <div className={cl.header}>
            <span>{t('Профиль')}</span>
            <Button className={cl.editButton} theme={ThemeButton.OUTLINE}>
                {t('Редактировать')}
            </Button>
        </div>
    )
}

export default ProfilePageHeader