import React from 'react'
import { useTranslation } from 'react-i18next'
import { List } from 'react-window'
import Listbox from 'shared/ui/ListBox/ListBox'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'
import { HStack } from 'shared/ui/Stack'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <PageWrapper>
      {t('Главная страница')}
      <div>asdasd</div>
      <div>asdasd</div>
      <HStack>
        <div>asdasd</div>
      </HStack>
      <div>asdasd</div>
      <div>asdasd</div>
    </PageWrapper>
  )
}

export default MainPage
