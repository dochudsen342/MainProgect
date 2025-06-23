import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { profileReducer } from 'entities/Profile'

interface ProfilePageProps {
  className?: string,
}

const reducers:ReducerList = {
  profile:profileReducer
} 

const ProfilePage = ({className}:ProfilePageProps) => {
    const {t} = useTranslation()
  return (
    <DynamicReducerLoader removeAfterUnmount={true} reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        {t('Страница профиля')}
      </div>
    </DynamicReducerLoader>
    
  )
}

export default ProfilePage