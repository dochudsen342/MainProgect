import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { useParams } from 'react-router-dom'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { fetchProfileData } from '../../model/service/fetchDataProfile/fetchProfileData'
import { ProfileCard } from '@/entities/Profile'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'

interface EditableProfileCardProps {
  className?: string
  id?: string
}

const reducers: ReducerList = {
  profile: profileReducer,
}

const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props

  const profileData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const errors = useSelector(getProfileValidateErrors)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  }, [dispatch, id])

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }))
    },
    [dispatch]
  )

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch]
  )

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    },
    [dispatch]
  )

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch]
  )

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch]
  )

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch]
  )

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }))
    },
    [dispatch]
  )

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }))
    },
    [dispatch]
  )

  return (
    <DynamicReducerLoader removeAfterUnmount={true} reducers={reducers}>
      <div className='error__block'>
        {errors?.length &&
          errors.map((error: string) => {
            return (
              <span key={error} className='error'>
                {error}
              </span>
            )
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
    </DynamicReducerLoader>
  )
})

export default EditableProfileCard
