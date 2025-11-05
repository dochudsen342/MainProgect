import React, { useCallback } from 'react'
import cl from './TitleArticleForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Input, { InputTheme } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { createArticleFormAction } from '../../model/slice/createArticleFormSlice'
import {
  getCreateArticleImgLink,
  getCreateArticleSubtitle,
  getCreateArticleTitle,
} from '../../model/selectors/createArticleSelectors'

interface TitleArticleFormProps {
  className?: string
}

const TitleArticleForm = ({ className }: TitleArticleFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const title = useSelector(getCreateArticleTitle)
  const suibtitle = useSelector(getCreateArticleSubtitle)
  const imgLink = useSelector(getCreateArticleImgLink)
  const onChangeArticleTitle = useCallback(
    (value: string) => {
      dispatch(createArticleFormAction.setTitleArticle(value))
    },
    [dispatch]
  )

  const onChangeArticleSubtitle = useCallback(
    (value: string) => {
      dispatch(createArticleFormAction.setSubtitleArticle(value))
    },
    [dispatch]
  )

  const onChangeArticleImgLink = useCallback(
    (value: string) => {
      dispatch(createArticleFormAction.setArticleImgLink(value))
    },
    [dispatch]
  )

  return (
    <div className={classNames(cl.TitleArticleForm, {}, [className])}>
      <Input
        onChange={onChangeArticleTitle}
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Заголовок статьи')}
        value={title}
      />
      <Input
        onChange={onChangeArticleSubtitle}
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Подзаголовок статьи')}
        value={suibtitle}
      />
      <Input
        onChange={onChangeArticleImgLink}
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Ссылка на фото статьи')}
        value={imgLink}
      />
    </div>
  )
}

export default TitleArticleForm
