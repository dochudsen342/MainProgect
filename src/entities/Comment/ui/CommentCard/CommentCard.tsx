import { getRouteProfile } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { Comment } from '../../model/types/comment'
import cl from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cl.CommentCard, {}, [className])}>
        <div className={cl.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton className={cl.userName} width={100} height={16} />
        </div>
        <Skeleton className={cl.text} width={'85%'} height={50} />
      </div>
    )
  }
  return (
    <div className={classNames(cl.CommentCard, {}, [className])}>
      <AppLink
        theme={AppLinkTheme.INVERTED}
        to={getRouteProfile(comment?.user.id)}
        className={cl.header}
      >
        {comment?.user.avatar ? <Avatar src={comment?.user.avatar} size={30} /> : null}
        <Text className={cl.userName} title={comment?.user.username} />
      </AppLink>
      <Text className={cl.text} text={comment?.text} />
    </div>
  )
}

export default CommentCard
