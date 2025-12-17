import { memo, useCallback, useEffect } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { useSelector } from 'react-redux'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { ArticleDetailsReducers } from '../../model/slice/articleDetailsSlice'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import Avatar from '@/shared/ui/Avatar/Avatar'
import Text, { TextAligin, TextSize } from '@/shared/ui/Text/Text'
import EyeIcon from '@/shared/assets/icons/EyeView.svg'
import Calendar from '@/shared/assets/icons/clarity_date-line.svg'
import Icon, { IconFill } from '@/shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import ArticleCodeBlockComonent from '../ArticleCodeBlockComponent/ArticleCodeBlockComonent'
import ArticleImageBlockComonent from '../ArticleImageBlockComponent/ArticleImageBlockComonent'
import ArticleTextBlockComonent from '../ArticleTextBlockComponent/ArticleTextBlockComonent'
import cl from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducerList = {
  articleDetails: ArticleDetailsReducers,
}

const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComonent key={block.id} block={block} className={cl.block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComonent key={block.id} block={block} className={cl.block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComonent key={block.id} className={cl.block} block={block} />
      default:
        return null
    }
  }, [])

  let content

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cl.avatar} width={200} height={200} border={'50%'} />
        <Skeleton className={cl.title} width={300} height={32} />
        <Skeleton className={cl.skeleton} width={600} height={24} />
        <Skeleton className={cl.skeleton} width={'100%'} height={200} />
        <Skeleton className={cl.skeleton} width={'100%'} height={200} />
      </>
    )
  } else if (error) {
    content = <div>error</div>
  } else {
    content = (
      <>
        <div className={cl.avatar}>
          <Avatar size={200} alt={'avatar'} src={article?.img} />
        </div>
        <Text
          size={TextSize.L}
          title={article?.title}
          aligin={TextAligin.LEFT}
          text={article?.subtitle}
        />
        <div className={cl.articleInfo}>
          <Icon theme={IconFill.SECONDARY} Svg={EyeIcon} />
          <Text size={TextSize.M} title={String(article?.views)} />
        </div>
        <div className={cl.articleInfo}>
          <Icon theme={IconFill.SECONDARY} Svg={Calendar} />
          <Text size={TextSize.M} title={String(article?.createdDate)} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cl.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicReducerLoader>
  )
})

export default ArticleDetails
