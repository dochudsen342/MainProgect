import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Input, { inputTheme } from 'shared/ui/Input/Input'
import Spiner from 'shared/ui/Spiner/Spiner'
import { Profile } from '../../model/types/profile'
import cl from './ProfileCard.module.scss'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country } from "entities/Country/model/types/country"
import { CountrySelect } from 'entities/Country'



interface ProfileCardProps {
    className?: string,
    data?:Profile,
    isLoading?:boolean,
    error?:string,
    readonly?:boolean,
    onChangeFirstName?:(value?:string) => void,
    onChangeLastName?:(value?:string) => void,
    onChangeAge?:(value?:string) => void,
    onChangeCity?:(value?:string) => void,
    onChangeUsername?:(value?:string) => void,
    onChangeAvatar?:(value?:string) => void,
    onChangeCurrency?:(currency?:Currency) =>void,
    onChangeCountry?:(counry?:Country) =>void,
}

const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation()
    const {
        data,
        isLoading,
        error,
        className,
        readonly,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeFirstName,
        onChangeLastName,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props
    
    const mods = {
        [cl.editing]:!readonly
    }

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
        <div className={classNames(cl.ProfileCard, mods, [className])}>
            {data?.avatar && <Avatar alt='Фото хакера' size={150} src={data?.avatar}/>}
            <div className={cl.data}>
                <div className={cl.data_input}>
                    <span>{t('Ваше имя:')}</span>
                    <Input onChange={onChangeFirstName} inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.firstname}/>
                </div>
                <div className={cl.data_input}>
                    <span>{t('Ваша фамилия:')}</span>
                    <Input onChange={onChangeLastName} inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.lastname}/>
                </div>
                <div className={cl.data_input}>
                    <span>{t('Ваш возраст:')}</span>
                    <Input onChange={onChangeAge} inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.age}/>
                </div>
                <div className={cl.data_input}>
                    <span>{t('Ваш город:')}</span>
                    <Input onChange={onChangeCity} inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.city}/>
                </div> 
                <div className={cl.data_input}>
                    <span>{t('Ваш Username:')}</span>
                    <Input onChange={onChangeUsername} inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.username}/>
                </div> 
                <div className={cl.data_input}>
                    <span>{t('Ссылка на аватар:')}</span>
                    <Input onChange={onChangeAvatar} inputTheme={inputTheme.CLEAR} disabled ={readonly} className={cl.input} value={data?.avatar}/>
                </div> 
                <CurrencySelect readonly ={readonly} className={cl.data_input}  value={data?.currency} onChange={onChangeCurrency}/>
                <CountrySelect readonly ={readonly} className={cl.data_input} value={data?.country} onChange={onChangeCountry}/>
            </div>
        </div>
    )
}

export default ProfileCard