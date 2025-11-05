import React, { useCallback } from 'react'
import cl from './EditTypeArticle.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import CheckboxInput from 'shared/ui/CheckboxInput/CheckboxInput'
import { ArcticleType, Article } from 'entities/Article/model/types/article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { editArticleFormAction } from '../../model/slice/editArticleSlice'

interface EditTypeArticleProps {
  className?: string
  articleDetailsData?: Article
}

const EditTypeArticle = ({ className, articleDetailsData }: EditTypeArticleProps) => {
  const dispatch = useAppDispatch()
  const onAddArticleType = useCallback(
    (value: ArcticleType) => {
      dispatch(editArticleFormAction.setArticleType(value))
    },
    [dispatch]
  )

  const onDeleteArticleType = useCallback(
    (value: ArcticleType) => {
      dispatch(editArticleFormAction.deleteArticleType(value))
    },
    [dispatch]
  )
  return (
    <div className={classNames(cl.TypeArticleForm, {}, [className])}>
      <p className={cl.TypeArticleTitle}>Выберите тип статьи:</p>
      <div className={cl.checkboxWrapper}>
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='Economy'
          type='checkbox'
          isChecked={articleDetailsData?.type.includes(ArcticleType.ECONOMY)}
          value={ArcticleType.ECONOMY}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='IT'
          type='checkbox'
          isChecked={articleDetailsData?.type.includes(ArcticleType.IT)}
          value={ArcticleType.IT}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='Science'
          type='checkbox'
          isChecked={articleDetailsData?.type.includes(ArcticleType.SCIENCE)}
          value={ArcticleType.SCIENCE}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='Tech'
          type='checkbox'
          isChecked={articleDetailsData?.type.includes(ArcticleType.TECH)}
          value={ArcticleType.TECH}
          className={cl.inputMainInfo}
        />
      </div>
    </div>
  )
}

export default EditTypeArticle
