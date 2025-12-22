import StarIcon from '@/shared/assets/icons/Star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useCallback, useState } from 'react'
import { Icon } from '../Icon/Icon'
import cl from './StarRating.module.scss'

interface StarRatingProps {
  className?: string
  onSelect?: (starCount: number) => void
  size?: number
  selectedStars?: number
}
const stars = [1, 2, 3, 4, 5]
export const StarRating = ({ className, onSelect, selectedStars = 0, size }: StarRatingProps) => {
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))
  const onHover = useCallback(
    (currentStarCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(currentStarCount)
      }
    },
    [isSelected]
  )

  const onLeave = useCallback(
    () => () => {
      if (!isSelected) {
        setCurrentStarsCount(0)
      }
    },
    [isSelected]
  )
  const onClickHandler = useCallback(
    (currentStarCount: number) => () => {
      if (!isSelected) {
        onSelect?.(currentStarCount)
        setIsSelected(true)
      }
    },
    []
  )
  return (
    <div className={classNames(cl.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave()}
          onClick={onClickHandler(starNumber)}
          className={classNames(cl.starIcon, { [cl.selected]: isSelected }, [
            currentStarsCount >= starNumber ? cl.hovered : cl.normal,
          ])}
          width={size}
          height={size}
          Svg={StarIcon}
          key={starNumber}
        />
      ))}
    </div>
  )
}
