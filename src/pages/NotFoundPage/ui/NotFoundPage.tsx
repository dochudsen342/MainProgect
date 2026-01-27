import { useTranslation } from 'react-i18next'
import cl from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return <div data-testid='NotFoundPage' className={cl.NotFoundPage}>{t('Страница не найдена!')}</div>
}

export default NotFoundPage
