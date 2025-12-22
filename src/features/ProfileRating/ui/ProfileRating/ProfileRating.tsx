import React, { useEffect } from 'react'
import cl from './ProfileRating.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { StarRating } from '@/shared/ui/StarRating'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  getProfileRatingData,
  getProfileRatingIsLoading,
} from '../../model/selectors/getProfileRatingData'
import { fetchProfileRating } from '../../model/service/fetchProfileRating/fetchProfileRating'

interface ProfileRatingProps {
  className?: string
  userId: string
}

const ProfileRating = ({ className, userId }: ProfileRatingProps) => {
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
}

export default ProfileRating
