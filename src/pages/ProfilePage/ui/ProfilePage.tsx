import { useCallback, useEffect, useMemo } from 'react'
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileValidateErrors, profileActions, ProfileCard, profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import { Currency } from "entities/Currency/model/types/currency"
import { Country } from 'entities/Country/model/types/country'

interface ProfilePageProps {
  className?: string,
}

const reducers: ReducerList = {
  profile: profileReducer
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const profileData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const errors = useSelector(getProfileValidateErrors)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicReducerLoader removeAfterUnmount={true} reducers={reducers}>
      <div className={classNames('page-wrapper')}>
        <ProfilePageHeader />
        <div className='error__block'>
          {errors?.length && errors.map((error) => {
            return <span key={error} className='error'>{error}</span>
          })}
        </div>

        <ProfileCard
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeLastName={onChangeLastName}
          onChangeFirstName={onChangeFirstName}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          data={profileData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
        />
      </div>
    </DynamicReducerLoader>

  )
}

export default ProfilePage