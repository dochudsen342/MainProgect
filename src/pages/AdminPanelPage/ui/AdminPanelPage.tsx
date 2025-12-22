import { useTranslation } from 'react-i18next'

const AdminPanelPage = () => {
  const { t } = useTranslation()

  return <div>{t('Админ панель')}</div>
}

export default AdminPanelPage
