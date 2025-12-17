import React, { useCallback } from 'react'
import cl from './ArticleTypeSelector.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import CheckboxInput from '@/shared/ui/CheckboxInput/CheckboxInput'
import { ArcticleType } from '@/entities/Article/model/types/article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { articleCrudFormAction } from '../../model/slice/articleCrudSlice'
import { useSelector } from 'react-redux'
import { getCrudArticleData } from '../../model/selectors/getCrudArticleSelectors/getCrudArticleSelectors'

interface TypeArticleFormProps {
  className?: string
}

const ArticleTypeSelector = ({ className }: TypeArticleFormProps) => {
  const dispatch = useAppDispatch()
  const articleData = useSelector(getCrudArticleData)
  const onAddArticleType = useCallback(
    (value: ArcticleType) => {
      dispatch(articleCrudFormAction.setArticleType(value))
    },
    [dispatch]
  )

  const onDeleteArticleType = useCallback(
    (value: ArcticleType) => {
      dispatch(articleCrudFormAction.deleteArticleType(value))
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
          value={ArcticleType.ECONOMY}
          isChecked={articleData?.type.includes(ArcticleType.ECONOMY)}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='IT'
          type='checkbox'
          value={ArcticleType.IT}
          isChecked={articleData?.type.includes(ArcticleType.IT)}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='Science'
          type='checkbox'
          value={ArcticleType.SCIENCE}
          isChecked={articleData?.type.includes(ArcticleType.SCIENCE)}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='Tech'
          type='checkbox'
          value={ArcticleType.TECH}
          isChecked={articleData?.type.includes(ArcticleType.TECH)}
          className={cl.inputMainInfo}
        />
      </div>
    </div>
  )
}

export default ArticleTypeSelector
