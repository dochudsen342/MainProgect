import React, { useCallback } from 'react'
import cl from './TypeArticleForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import CheckboxInput from 'shared/ui/CheckboxInput/CheckboxInput'
import { ArcticleType } from 'entities/Article/model/types/article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { createArticleFormAction } from '../../model/slice/createArticleForm'

interface TypeArticleFormProps {
  className?: string
}

const TypeArticleForm = ({ className }: TypeArticleFormProps) => {
  const dispatch = useAppDispatch()

  const onAddArticleType = useCallback(
    (value: ArcticleType) => {
      dispatch(createArticleFormAction.setArticleType(value))
    },
    [dispatch],
  )

  const onDeleteArticleType = useCallback(
    (value: ArcticleType) => {
      dispatch(createArticleFormAction.deleteArticleType(value))
    },
    [dispatch],
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
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='IT'
          type='checkbox'
          value={ArcticleType.IT}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='Science'
          type='checkbox'
          value={ArcticleType.SCIENCE}
          className={cl.inputMainInfo}
        />
        <CheckboxInput
          onDeleteValue={onDeleteArticleType}
          onChange={onAddArticleType}
          chekboxText='Tech'
          type='checkbox'
          value={ArcticleType.TECH}
          className={cl.inputMainInfo}
        />
      </div>
    </div>
  )
}

export default TypeArticleForm
