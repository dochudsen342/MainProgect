import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cl from './LoginForm.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {

    const { t } = useTranslation()
   



    return (
        <div className={classNames(cl.LoginForm)}>
            <Input autoFocus = {true} placeholder='Login' className={cl.input} type='text'/>
            <Input placeholder='password' className={cl.input} type='text'/>
            <Button className={cl.LoginBtn}>
                {t('Войти')}
            </Button>
        </div>
    )
}

export default LoginForm
