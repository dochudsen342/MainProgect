import React, { useCallback, useState } from 'react'
import cl from './RatingCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import Card from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import Text from '@/shared/ui/Text/Text'
import StarRating from '@/shared/ui/StarRating/StarRating'
import Modal from '@/shared/ui/Modal/Modal'
import Input from '@/shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from '@/shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import Drawer from '@/shared/ui/Drawer/Drawer'
import AnimationProvider from '@/shared/lib/components/AnimationProvider/AnimationProvider'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starCount: number) => void
  onAccept?: (startCount: number, feedback?: string) => void
}

const RatingCard = ({
  className,
  feedbackTitle,
  hasFeedback,
  onAccept,
  onCancel,
  title,
}: RatingCardProps) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(0)
  const [feedback, setFeedback] = useState('')
  console.log(isModalOpen)
  const onCloseModal = () => {
    if (!hasFeedback) {
      setIsModalOpen(false)
    }
  }
  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount)
      if (hasFeedback) {
        setIsModalOpen(true)
      } else {
        onAccept?.(starsCount)
      }
    },
    [hasFeedback, onAccept]
  )

  const onAcceptHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [onAccept])

  const onCancelHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount)
  }, [onAccept])

  const modalContent = (
    <VStack gap='32'>
      <Text title={feedbackTitle} />
      <Input placeholder={t('Ваш отзыв')} />
      <HStack max gap='16'>
        <Button onClick={onAcceptHandler}>{t('Отправить')}</Button>
        <Button onClick={onCancelHandler} theme={ThemeButton.OUTLINE_RED}>
          {t('Закрыть')}
        </Button>
      </HStack>
    </VStack>
  )
  return (
    <Card className={classNames(cl.RatingCard, {}, [className])}>
      <VStack align='centre' gap='8'>
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal onClose={onCloseModal} isOpen={isModalOpen}>
          {modalContent}
        </Modal>
      </BrowserView>
      <MobileView>
        <AnimationProvider>
          <Drawer lazy isOpen={isModalOpen}>
            {modalContent}
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </Card>
  )
}

export default RatingCard
