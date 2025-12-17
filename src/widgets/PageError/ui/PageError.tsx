import React from 'react'
import cl from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'

interface PageErrorProps {
  className?: string
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const onReloadPage = () => {
    location.reload()
  }

  return (
    <section className={classNames(cl.PageError)}>
      <p>{t('Произошла ошибка')}</p>
      <button onClick={onReloadPage}>Обновить страницу</button>
    </section>
  )
}

export default PageError
