import { ReactNode, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { fetchCreateArticle } from '../../model/service/fetchCreateArticle'
import { createArticleFormReducer } from '../../model/slice/createArticleFormSlice'
import AddBlockPanel from '../AddBlockPanel/AddBlockPanel'
import TitleArticleForm from '../TitleArticleForm/TitleArticleForm'
import TypeArticleForm from '../TypeArticleForm/TypeArticleForm'
import cl from './CreateArticleForm.module.scss'

interface CreateArticleFormProps {
  className?: string
}

const reducers: ReducerList = {
  articleCreatePage: createArticleFormReducer,
}

const CreateArticleForm = ({ className }: CreateArticleFormProps) => {
  const [blocks, setBlocks] = useState<ReactNode[]>([])
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const onCreateArticle = useCallback(() => {
    dispatch(fetchCreateArticle())
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={true}>
      <p className={cl.CreateArticleFormTitle}>{t('Форма создания статьи:')}</p>
      <div className={classNames(cl.CreateArticleForm, {}, [className])}>
        <div className={cl.createArticleFom__mainInfo}>
          <TitleArticleForm className={cl.articleMainFields} />
          <TypeArticleForm />
        </div>
        <div className={cl.blocksWrapper}>
          {blocks.map((block, index) => (
            <div key={index}>{block}</div>
          ))}
        </div>
        <AddBlockPanel setBlocks={setBlocks} />
      </div>
      <Button onClick={onCreateArticle} className={cl.createBtn} theme={ThemeButton.OUTLINE}>
        {t('Создать статью')}
      </Button>
    </DynamicReducerLoader>
  )
}

export default CreateArticleForm
