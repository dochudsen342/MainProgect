import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import PageWrapper from '@/shared/ui/PageWrapper/PageWrapper'
import RatingCard from '@/entities/Rating/ui/RatingCard/RatingCard'

const MainPage = () => {
  const { t } = useTranslation()

  const onSelectStarHandler = useCallback((currentStarCount: number) => {}, [])
  return <PageWrapper>{t('Главная страница')}</PageWrapper>
}

export default MainPage
