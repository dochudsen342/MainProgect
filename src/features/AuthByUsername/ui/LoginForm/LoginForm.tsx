import React, { memo, useCallback} from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './LoginForm.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/service/loginByUsername/loginByUsername'


interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {username,password,error,isLoading} = useSelector(getLoginState)
    console.log(error)
    const onChangeUsername = useCallback((value:string) =>{
        dispatch(loginAction.setUserName(value))
    },[dispatch])

    const onChangePassword = useCallback((value:string) =>{
        dispatch(loginAction.setPassword(value))
    },[dispatch])

    const onLoginClick = useCallback(() =>{
        //@ts-ignore
        dispatch(loginByUsername({username,password}))
    },[dispatch,username,password])
    
    return (
        <div className={classNames(cl.LoginForm)}>
            <h1 className={cl.LoginForm_title}>{t('Форма авторизации')}</h1>
            {error && <div className={cl.LoginForm_error}>{t('Неверный логин или пароль')}</div>}
            <Input value={username} onChange={onChangeUsername} autoFocus = {true} placeholder={t('Логин')} className={cl.input} type='text'/>
            <Input value={password} onChange={onChangePassword} placeholder={t('Пароль')} className={cl.input} type='text'/>
            <Button theme={ThemeButton.OUTLINE} disabled = {isLoading} onClick={onLoginClick} className={cl.LoginBtn}>
                {t('Войти')}
            </Button>
        </div>
    )
})

export default LoginForm
