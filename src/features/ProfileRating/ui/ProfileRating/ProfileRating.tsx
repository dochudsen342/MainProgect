import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Skeleton } from '@/shared/ui/Skeleton'
import { StarRating } from '@/shared/ui/StarRating'
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  getProfileRatingData,
  getProfileRatingIsLoading,
} from '../../model/selectors/getProfileRatingData'
import { fetchProfileRating } from '../../model/service/fetchProfileRating/fetchProfileRating'
import cl from './ProfileRating.module.scss'

interface ProfileRatingProps {
  className?: string
  userId: string
}

const ProfileRating = memo(({ className, userId }: ProfileRatingProps) => {
  // const { data, isLoading } = useArticleRatings({ userId: userId ?? '' })

  const dispatch = useAppDispatch()
  const isLoading = useSelector(getProfileRatingIsLoading)
  const data = useSelector(getProfileRatingData)
  useEffect(() => {
    dispatch(fetchProfileRating({ userId }))
  }, [userId])

  if (isLoading) {
    return <Skeleton border='8px' width={200} height={50} />
  }
  const profileRate = data?.rate

  return (
    <div className={classNames(cl.ProfileRating, {}, [className])}>
      <StarRating selectedStars={profileRate} size={40} />
    </div>
  )
})

export default ProfileRating
