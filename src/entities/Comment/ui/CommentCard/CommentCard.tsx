import React from 'react'
import cl from './CommentCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import Avatar from '@/shared/ui/Avatar/Avatar'
import Text from '@/shared/ui/Text/Text'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/const/router'

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
        to={`${RoutePath.profile}${comment?.user.id}`}
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
