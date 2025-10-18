import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Input, { InputTheme } from 'shared/ui/Input/Input'
import Spiner from 'shared/ui/Spiner/Spiner'
import cl from './ProfileCard.module.scss'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country } from 'entities/Country/model/types/country'
import { CountrySelect } from 'entities/Country'
import { HStack, VStack } from 'shared/ui/Stack'
import { Profile } from '../../model/types/profile'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (counry: Country) => void
}

const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile')
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
    [cl.editing]: !readonly,
  }

  if (isLoading) {
    return (
      <HStack
        max
        justify='centre'
        className={classNames(cl.ProfileCard, { [cl.loading]: true }, [className])}
      >
        <Spiner />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack
        justify='centre'
        max
        className={classNames(cl.ProfileCard, { [cl.error]: true }, [className])}
      >
        <span>{t('Произошла ошибка при загрузке профиля')}</span>
        <p className={cl.error_advice}>{t('Попробуйте обновить страницу')}</p>
      </HStack>
    )
  }

  return (
    <VStack gap='8' max className={classNames(cl.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack max justify='centre'>
          <Avatar alt='Фото хакера' size={150} src={data?.avatar} />
        </HStack>
      )}
      <div className={cl.data_input}>
        <span>{t('Ваше имя:')}</span>
        <Input
          onChange={onChangeFirstName}
          inputTheme={InputTheme.CLEAR}
          disabled={readonly}
          className={cl.input}
          value={data?.firstname}
        />
      </div>
      <div className={cl.data_input}>
        <span>{t('Ваша фамилия:')}</span>
        <Input
          onChange={onChangeLastName}
          inputTheme={InputTheme.CLEAR}
          disabled={readonly}
          className={cl.input}
          value={data?.lastname}
        />
      </div>
      <div className={cl.data_input}>
        <span>{t('Ваш возраст:')}</span>
        <Input
          onChange={onChangeAge}
          inputTheme={InputTheme.CLEAR}
          disabled={readonly}
          className={cl.input}
          value={data?.age}
        />
      </div>
      <div className={cl.data_input}>
        <span>{t('Ваш город:')}</span>
        <Input
          onChange={onChangeCity}
          inputTheme={InputTheme.CLEAR}
          disabled={readonly}
          className={cl.input}
          value={data?.city}
        />
      </div>
      <div className={cl.data_input}>
        <span>{t('Ваш Username:')}</span>
        <Input
          onChange={onChangeUsername}
          inputTheme={InputTheme.CLEAR}
          disabled={readonly}
          className={cl.input}
          value={data?.username}
        />
      </div>
      <div className={cl.data_input}>
        <span>{t('Ссылка на аватар:')}</span>
        <Input
          onChange={onChangeAvatar}
          inputTheme={InputTheme.CLEAR}
          disabled={readonly}
          className={cl.input}
          value={data?.avatar}
        />
      </div>
      <CurrencySelect
        readonly={readonly}
        className={cl.data_input}
        value={data?.currency}
        onChange={onChangeCurrency}
      />
      <CountrySelect
        readonly={readonly}
        className={cl.data_input}
        value={data?.country}
        onChange={onChangeCountry}
      />
    </VStack>
  )
}

export default ProfileCard
