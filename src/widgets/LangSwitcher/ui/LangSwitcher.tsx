import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cl from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  collapsed?: boolean
}

const LangSwitcher = memo(({ collapsed }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation()
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <button className={cl.LangSwitcher} onClick={toggleLanguage}>
      {collapsed ? t('Короткий язык') : t('Язык')}
    </button>
  )
})

export default LangSwitcher
