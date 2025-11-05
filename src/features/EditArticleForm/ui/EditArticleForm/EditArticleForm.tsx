import React, { memo, useCallback, useEffect } from 'react'
import cl from './EditArticleForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import EditArticleTitle from '../EditAritcleTitle/EditArticleTitle'
import EditTypeArticle from '../EditTypeArticle/EditTypeArticle'
import { useSelector } from 'react-redux'
import { fetchArticleById } from 'entities/Article'
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
  getEditableArticleData,
  getEditableArticleIsLoading,
} from '../../model/selectors/getEditableArticleSelectors'
import EditTextAriaBlock from '../EditTextAreaBlock/EditTextAreaBlock'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { fetchUpdateArticle } from '../../model/service/fetchUpdateArticle'

interface EditableArticleProps {
  className?: string
  id: string
}

const EditableArticle = memo(({ className, id }: EditableArticleProps) => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getEditableArticleIsLoading)
  const articleDetailsData = useSelector(getEditableArticleData)
  const isDataReady = !isLoading && articleDetailsData?.blocks

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  const onApplyChanges = useCallback(() => {
    dispatch(fetchUpdateArticle())
  }, [dispatch])

  const renderBlocks = useCallback(
    (item: ArticleBlock) => {
      switch (item.type) {
        case ArticleBlockType.TEXT:
          return (
            <EditTextAriaBlock
              id={item.id}
              className={cl.test}
              key={item.id}
              value={item.paragraphs.join('\n')}
            />
          )
        case ArticleBlockType.CODE:
          return <EditTextAriaBlock id={item.id} key={item.id} value={item.code} />
        case ArticleBlockType.IMAGE:
          return <EditTextAriaBlock id={item.id} key={item.id} value={item.src} />
        default:
          return null
      }
    },
    [articleDetailsData]
  )
  let content

  if (!isDataReady) {
    content = (
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
  } else {
    content = (
      <>
        <div className={cl.createArticleFom__mainInfo}>
          <EditArticleTitle articleDetailsData={articleDetailsData} />
          <EditTypeArticle articleDetailsData={articleDetailsData} />
        </div>
        <div>{articleDetailsData?.blocks.map(renderBlocks)}</div>

        <>
          <Button onClick={onApplyChanges} className={cl.applyBtn} theme={ThemeButton.OUTLINE}>
            Сохранить изменеия
          </Button>
          <Button className={cl.cancelBtn} theme={ThemeButton.OUTLINE}>
            Отменить изменения
          </Button>
        </>
      </>
    )
  }
  return <div className={classNames(cl.TitleArticleForm, {}, [className])}>{content}</div>
})

export default EditableArticle
