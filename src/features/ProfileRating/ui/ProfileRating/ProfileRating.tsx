import React, { useCallback } from 'react'
import cl from './ProfileRating.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import StarRating from '@/shared/ui/StarRating/StarRating'
import { useArticleRatings } from '../../api/profileRatingApi'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'

interface ProfileRatingProps {
  className?: string
  userId: string
}

const ProfileRating = ({ className, userId }: ProfileRatingProps) => {
  const { data, isLoading, refetch } = useArticleRatings({ userId: userId ?? '' })

  const profileRate = data?.[0].rate

  const onSelectStarsHandler = useCallback(() => {}, [])

  if (isLoading) {
    return <Skeleton border='8px' width={200} height={50} />
  }
  return (
    <div className={classNames(cl.ProfileRating, {}, [className])}>
      <StarRating size={40} selectedStars={profileRate} />
    </div>
  )
}

export default ProfileRating
