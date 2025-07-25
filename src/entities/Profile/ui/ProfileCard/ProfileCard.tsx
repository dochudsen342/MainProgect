import React from 'react'
import cl from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Input, { inputTheme } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import Spiner from 'shared/ui/Spiner/Spiner'
import { ProfilePageHeader } from 'pages/ProfilePage'


interface ProfileCardProps {
    className?: string,
    data?:Profile,
    isLoading?:boolean,
    error?:string,
    readonly?:boolean
}

const ProfileCard = ({ className, data,isLoading,error,readonly }: ProfileCardProps) => {
    const { t } = useTranslation()

    if(isLoading){
        return <div className={classNames(cl.ProfileCard,{[cl.loading]:true},[className])}>
            <Spiner/>
        </div>
    }
    
    if(error){
        return <div className={classNames(cl.ProfileCard,{[cl.error]:true},[className])}>
            <span>{t('Произошла ошибка при загрузке профиля')}</span>
            <p className={cl.error_advice}>{t('Попробуйте обновить страницу')}</p>
        </div>
    }
    
    return (
        <div className={classNames(cl.ProfileCard, {}, [className])}>
            <div className={cl.data}>
                <div className={cl.data_name}>
                    <span>{t('Ваше имя:')}</span>
                    <Input inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.firstname}/>
                </div>
                <div className={cl.data_name}>
                    <span>{t('Ваша фамилия:')}</span>
                    <Input inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.lastname}/>
                </div>
                
               
            </div>
        </div>
    )
}

export default ProfileCard