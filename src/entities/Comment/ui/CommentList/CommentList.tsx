import React from 'react'
import cl from './CommentList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from 'shared/ui/Text/Text'
import CommentCard from '../CommentCard/CommentCard'
import { Comment } from 'entities/Comment/model/types/comment'

interface CommentListProps {
  className?: string,
  comments?:Comment[],
  isLoading?:boolean,

}

const CommentList = ({className,comments,isLoading}:CommentListProps) => {
 
  return (
    <div className={classNames(cl.CommentList, {}, [className])}>
       {comments?.length ? comments.map(comment => (
        <CommentCard isLoading= {isLoading} className={cl.comment} comment = {comment}/>
       )) 
       :<Text text={'Комментарии отсутствуют'}/>}
    </div>
  )
}

export default CommentList