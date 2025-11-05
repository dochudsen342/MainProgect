import React, { useCallback } from 'react'
import cl from './EditAritcleTitle.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Input, { InputTheme } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { editArticleFormAction } from '../../model/slice/editArticleSlice'
import { Article } from 'entities/Article'

interface EditArticleTitleProps {
  className?: string
  articleDetailsData?: Article
}

const EditArticleTitle = ({ className, articleDetailsData }: EditArticleTitleProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const onChangeTitle = useCallback(
    (value: string) => {
      dispatch(editArticleFormAction.editTitle(value))
    },
    [dispatch]
  )

  const onChangeSubtitle = useCallback(
    (value: string) => {
      dispatch(editArticleFormAction.editSubtitle(value))
    },
    [dispatch]
  )

  const onChangeImgLink = useCallback(
    (value: string) => {
      dispatch(editArticleFormAction.editImgLink(value))
    },
    [dispatch]
  )

  return (
    <div className={classNames(cl.EditArticleTitle, {}, [className])}>
      <Input
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        onChange={onChangeTitle}
        placeholder={t('Заголовок статьи')}
        value={articleDetailsData?.title}
      />
      <Input
        onChange={onChangeSubtitle}
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Подзаголовок статьи')}
        value={articleDetailsData?.subtitle}
      />
      <Input
        onChange={onChangeImgLink}
        className={cl.inputMainInfo}
        inputTheme={InputTheme.OUTLINE}
        placeholder={t('Ссылка на фото статьи')}
        value={articleDetailsData?.img}
      />
    </div>
  )
}

export default EditArticleTitle
