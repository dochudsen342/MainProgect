import React from 'react'
import cl from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
    const {i18n} = useTranslation()
   const toggleLanguage = () =>{
     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
   }

  return (
    <button onClick={toggleLanguage}>{i18n.language === 'ru' ? 'en' : 'ru'}</button>
  )
}

export default LangSwitcher
