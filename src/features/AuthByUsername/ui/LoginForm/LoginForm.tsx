import { classNames } from '@/shared/lib/classNames/classNames'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLodaing'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername'
import { loginAction, loginReducer } from '../../model/slice/loginSlice'
import cl from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginAction.setUserName(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginAction.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    //@ts-ignore
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicReducerLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={classNames(cl.LoginForm)}>
        <h1 className={cl.LoginForm_title}>{t('Форма авторизации')}</h1>
        {error && <div className={cl.LoginForm_error}>{t('Неверный логин или пароль')}</div>}
        <Input
          value={username}
          onChange={onChangeUsername}
          autoFocus={true}
          placeholder={t('Логин')}
          className={cl.input}
          type='text'
        />
        <Input
          value={password}
          onChange={onChangePassword}
          placeholder={t('Пароль')}
          className={cl.input}
          type='text'
        />
        <Button
          theme={ThemeButton.OUTLINE}
          disabled={isLoading}
          onClick={onLoginClick}
          className={cl.LoginBtn}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicReducerLoader>
  )
})

export default LoginForm
