import { memo, useCallback } from 'react'
import { Currency } from 'entities/Currency/model/types/currency'
import { useTranslation } from 'react-i18next'
import Select from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'
import Listbox, { ListBoxItem } from 'shared/ui/ListBox/ListBox'

interface CountrySelectProps {
  className?: string
  value?: string
  readonly?: boolean
  onChange?: (value: Country) => void
}
const options: ListBoxItem[] = [
  { value: Country.ARMENIA, content: Country.ARMENIA, unavailable: false },
  { value: Country.GERMANY, content: Country.GERMANY, unavailable: false },
  { value: Country.RUSSIA, content: Country.RUSSIA, unavailable: false },
  { value: Country.USA, content: Country.USA, unavailable: false },
]

const CountrySelect = memo(({ className, onChange, value, readonly }: CountrySelectProps) => {
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country)
    },
    [onChange]
  )

  return (
    <Listbox
      onChange={onChangeHandler}
      readonly={readonly}
      value={value}
      defaultValue={t('Укажите страну')}
      items={options}
      label={t('Выберите страну:')}
    />
  )
})

export default CountrySelect
