import React from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'
import { VStack } from 'shared/ui/Stack'
import EditableProfileCard from 'features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard'
import { useParams } from 'react-router-dom'
import Text from 'shared/ui/Text/Text'
import EditableProfileCardHeader from 'features/EditableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  if (!id) {
    return <Text text={t('Профиль не найден')}></Text>
  }
  return (
    <PageWrapper>
      <VStack gap='16' max>
        <EditableProfileCardHeader />
        <EditableProfileCard id={id} />
      </VStack>
    </PageWrapper>
  )
}

export default ProfilePage
