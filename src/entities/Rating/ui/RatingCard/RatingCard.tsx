import { classNames } from '@/shared/lib/classNames/classNames'
import AnimationProvider from '@/shared/lib/components/AnimationProvider/AnimationProvider'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Drawer } from '@/shared/ui/Drawer'
import { Input } from '@/shared/ui/Input'
import { Modal } from '@/shared/ui/Modal'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating'
import { Text } from '@/shared/ui/Text'
import { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { useTranslation } from 'react-i18next'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starCount: number) => void
  onAccept?: (startCount: number, feedback?: string) => void
  rate?: number
}

const RatingCard = ({
  className,
  feedbackTitle,
  hasFeedback,
  onAccept,
  onCancel,
  title,
  rate = 0,
}: RatingCardProps) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')
  const onCloseModal = () => {
    if (!hasFeedback) {
      setIsModalOpen(false)
    }
  }
  const onSelectStars = (selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(starsCount)
    }
  }

  const onAcceptHandler = () => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }

  const onCancelHandler = () => {
    setIsModalOpen(false)
    onAccept?.(starsCount)
  }

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
    <Card className={classNames('', {}, [className])}>
      <VStack align='centre' gap='8'>
        <Text title={title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
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
