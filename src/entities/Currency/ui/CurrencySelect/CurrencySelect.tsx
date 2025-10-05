import { memo, useCallback } from 'react'
import { Currency } from '../../model/types/currency'
import { useTranslation } from 'react-i18next'
import Select from 'shared/ui/Select/Select'

interface CurrencySelectProps {
  className?: string
  value?: string
  readonly?: boolean
  onChange?: (value: Currency) => void
}
const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

const CurrencySelect = memo(({ onChange, value, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange],
  )

  return (
    <Select
      readonly={readonly}
      onChange={onChangeHandler}
      label={t('Ваша валюта:')}
      value={value}
      options={options}
    />
  )
})

export default CurrencySelect
