import { Listbox, ListBoxItem } from '@/shared/ui/Popus'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
  className?: string
  value?: string
  readonly?: boolean
  onChange?: (value: Currency) => void
}
const options: ListBoxItem[] = [
  { value: Currency.RUB, content: Currency.RUB, unavailable: false },
  { value: Currency.EUR, content: Currency.EUR, unavailable: false },
  { value: Currency.USD, content: Currency.USD, unavailable: false },
]

const CurrencySelect = memo(({ onChange, value, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange]
  )
  return (
    <Listbox
      onChange={onChangeHandler}
      defaultValue={t('Укажите валюту')}
      readonly={readonly}
      value={value}
      items={options}
      direction='top'
      label={t('Выберите валюту:')}
    />
  )
})

export default CurrencySelect
