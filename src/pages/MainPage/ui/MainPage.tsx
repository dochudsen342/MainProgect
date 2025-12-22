import { PageWrapper } from '@/shared/ui/PageWrapper'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  const onSelectStarHandler = useCallback((currentStarCount: number) => {}, [])
  return <PageWrapper>{t('Главная страница')}</PageWrapper>
}

export default MainPage
