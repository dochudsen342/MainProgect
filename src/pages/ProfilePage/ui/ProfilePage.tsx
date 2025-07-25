import { useEffect } from 'react'
import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, ProfileCard, profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'

interface ProfilePageProps {
  className?: string,
}

const reducers:ReducerList = {
  profile:profileReducer
} 

const ProfilePage = ({className}:ProfilePageProps) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const profileData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

  useEffect(() =>{
    dispatch(fetchProfileData())
  },[dispatch])

  return (
    <DynamicReducerLoader removeAfterUnmount={true} reducers={reducers}>
      <div className={classNames('page-wrapper')}>
        <ProfilePageHeader/>
        <ProfileCard data={profileData} isLoading = {isLoading} error = {error} readonly ={readonly}/>
      </div>
    </DynamicReducerLoader>
    
  )
}

export default ProfilePage