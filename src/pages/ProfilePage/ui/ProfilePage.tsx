import { useEffect } from 'react'
import { fetchProfileData, profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageProps {
  className?: string,
}

const reducers:ReducerList = {
  profile:profileReducer
} 

const ProfilePage = ({className}:ProfilePageProps) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(fetchProfileData())
  },[dispatch])

  return (
    <DynamicReducerLoader removeAfterUnmount={true} reducers={reducers}>
      <div className={classNames('')}>
        {t('Страница профиля')}
      </div>
    </DynamicReducerLoader>
    
  )
}

export default ProfilePage