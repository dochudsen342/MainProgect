import { Listbox, ListBoxItem } from '@/shared/ui/Popus'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/country'

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
