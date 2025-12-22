import { fetchArticleById } from '@/entities/Article'
import { ArticleBlock, ArticleBlockType } from '@/entities/Article/model/types/article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { InputTheme } from '@/shared/ui/CheckboxInput'
import { Input } from '@/shared/ui/Input'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getCrudArticleData,
  getCrudArticleIsLoading,
} from '../../model/selectors/getCrudArticleSelectors/getCrudArticleSelectors'
import { fetchUpdateArticle } from '../../model/service/fetchUpdateArticle/fetchUpdateArticle'
import AddBlockPanel from '../AddBlockPanel/AddBlockPanel'
import ArticleHeaderFields from '../ArticleHeaderFields/ArticleHeaderFields'
import ArticleTypeSelector from '../ArticleTypeSelector/ArticleTypeSelector'
import TextAreaCrudBlock from '../TextAreaCrudBlock/TextAreaCrudBlock'
import cl from './ArticleEditForm.module.scss'

interface ArticleEditFormProps {
  className?: string
  articleId: string
}

const ArticleEditForm = ({ className, articleId }: ArticleEditFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articleData = useSelector(getCrudArticleData)
  const isLoading = useSelector(getCrudArticleIsLoading)
  const isDataReady = !isLoading && articleData?.blocks.length

  useEffect(() => {
    dispatch(fetchArticleById(articleId))
  }, [])

  const onApplyChanges = useCallback(() => {
    if (articleId) {
      dispatch(fetchUpdateArticle(articleId))
    }
  }, [dispatch, articleId])

  const renderBlocks = useCallback(
    (item: ArticleBlock) => {
      switch (item.type) {
        case ArticleBlockType.TEXT:
          return (
            <TextAreaCrudBlock
              id={item.id}
              className={cl.textAreaBlock}
              placeholder={t('Введите текст...')}
              key={item.id}
              value={item.paragraphs.join('\n')}
            />
          )
        case ArticleBlockType.CODE:
          return (
            <TextAreaCrudBlock
              className={cl.textAreaBlock}
              placeholder={t('Введите код...')}
              id={item.id}
              key={item.id}
              value={item.code}
            />
          )
        case ArticleBlockType.IMAGE:
          return (
            <Input
              className={cl.inputMainInfo}
              placeholder={t('Введите ссылку на фото...')}
              inputTheme={InputTheme.OUTLINE}
              id={item.id}
              key={item.id}
              value={item.src}
            />
          )
        default:
          return null
      }
    },
    [t]
  )

  if (!isDataReady) {
    return (
      <>
        <div className={cl.createArticleFom__mainInfo}>
          <Skeleton width={500} height={200} />
          <Skeleton width={150} height={150} />
        </div>
        <div>
          <Skeleton className={cl.textAreaSkeleton} height={300} width={'80%'} />
          <Skeleton className={cl.textAreaSkeleton} height={300} width={'80%'} />
        </div>
      </>
    )
  }

  return (
    <>
      <div className={classNames(cl.ArticleEditForm, {}, [className])}>
        <div className={cl.createArticleFom__mainInfo}>
          <ArticleHeaderFields className={cl.articleMainFields} />
          <ArticleTypeSelector />
        </div>
        <div>{articleData?.blocks.map(renderBlocks)}</div>
        <AddBlockPanel />
      </div>
      <Button onClick={onApplyChanges} theme={ThemeButton.OUTLINE}>
        {t('Применить изменения')}
      </Button>
    </>
  )
}

export default ArticleEditForm
