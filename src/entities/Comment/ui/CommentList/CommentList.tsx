import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Comment } from '../../model/types/comment'
import CommentCard from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
  return (
    <div className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />
        ))
      ) : (
        <Text text={'Комментарии отсутствуют'} />
      )}
    </div>
  )
}

export default CommentList
