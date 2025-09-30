import React from 'react'
import cl from './CreateArticleForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import TypeArticleForm from '../TypeArticleForm/TypeArticleForm'
import TitleArticleForm from '../TitleArticleForm/TitleArticleForm'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { createArticleFormReducer } from '../../model/slice/createArticleForm'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

interface CreateArticleFormProps {
  className?: string
}

const reducers: ReducerList = {
  articleCreatePage: createArticleFormReducer,
}

const CreateArticleForm = ({ className }: CreateArticleFormProps) => {
  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={true}>
      <p className={cl.CreateArticleFormTitle}>Форма создания статьи:</p>
      <div className={classNames(cl.CreateArticleForm, {}, [className])}>
        <TitleArticleForm className={cl.articleMainFields} />
        <TypeArticleForm />
      </div>
      <Button theme={ThemeButton.OUTLINE}>Создать статью</Button>
    </DynamicReducerLoader>
  )
}

export default CreateArticleForm
