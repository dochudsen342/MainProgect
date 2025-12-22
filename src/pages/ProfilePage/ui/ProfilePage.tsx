import EditableProfileCard from '@/features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard'
import EditableProfileCardHeader from '@/features/EditableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader'
import { ProfileRating } from '@/features/ProfileRating'
import { PageWrapper } from '@/shared/ui/PageWrapper'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

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
        <ProfileRating userId={id} />
        <EditableProfileCard id={id} />
      </VStack>
    </PageWrapper>
  )
}

export default ProfilePage
