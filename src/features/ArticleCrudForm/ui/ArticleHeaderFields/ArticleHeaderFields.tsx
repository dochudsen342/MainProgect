import React, { useCallback } from 'react'
import cl from './ArticleHeaderFields.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Input, { InputTheme } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { articleCrudFormAction } from '../../model/slice/articleCrudSlice'
import { getCrudArticleData } from '../../model/selectors/getCrudArticleSelectors/getCrudArticleSelectors'

interface TitleArticleFormProps {
  className?: string
}

const ArticleHeaderFields = ({ className }: TitleArticleFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const articleData = useSelector(getCrudArticleData)
  const onChangeArticleTitle = useCallback(
    (value: string) => {
      dispatch(articleCrudFormAction.setTitleArticle(value))
    },
    [dispatch]
  )

  const onChangeArticleSubtitle = useCallback(
    (value: string) => {
      dispatch(articleCrudFormAction.setSubtitleArticle(value))
    },
    [dispatch]
  )

  const onChangeArticleImgLink = useCallback(
    (value: string) => {
      dispatch(articleCrudFormAction.setArticleImgLink(value))
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
        value={articleData?.title}
      />
      <Input
        onChange={onChangeArticleSubtitle}
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Подзаголовок статьи')}
        value={articleData?.subtitle}
      />
      <Input
        onChange={onChangeArticleImgLink}
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Ссылка на фото статьи')}
        value={articleData?.img}
      />
    </div>
  )
}

export default ArticleHeaderFields
