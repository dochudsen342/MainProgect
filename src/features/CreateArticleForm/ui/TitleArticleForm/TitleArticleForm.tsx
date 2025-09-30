import React, { useCallback } from 'react'
import cl from './TitleArticleForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Input, { inputTheme } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { createArticleFormAction } from '../../model/slice/createArticleForm'

interface TitleArticleFormProps {
  className?: string
}

const TitleArticleForm = ({ className }: TitleArticleFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const onChangeArticleTitle = useCallback(
    (value: string) => {
      dispatch(createArticleFormAction.setTitleArticle(value))
    },
    [dispatch],
  )

  const onChangeArticleSubtitle = useCallback(
    (value: string) => {
      dispatch(createArticleFormAction.setSubtitleArticle(value))
    },
    [dispatch],
  )

  const onChangeArticleImgLink = useCallback(
    (value: string) => {
      dispatch(createArticleFormAction.setArticleImgLink(value))
    },
    [dispatch],
  )

  return (
    <div className={classNames(cl.TitleArticleForm, {}, [className])}>
      <Input
        onChange={onChangeArticleTitle}
        className={cl.inputMainInfo}
        inputTheme={inputTheme.OUTLINE}
        placeholder={t('Заголовок статьи')}
      />
      <Input
        onChange={onChangeArticleSubtitle}
        className={cl.inputMainInfo}
        inputTheme={inputTheme.OUTLINE}
        placeholder={t('Подзаголовок статьи')}
      />
      <Input
        onChange={onChangeArticleImgLink}
        className={cl.inputMainInfo}
        inputTheme={inputTheme.OUTLINE}
        placeholder={t('Ссылка на фото статьи')}
      />
    </div>
  )
}

export default TitleArticleForm
