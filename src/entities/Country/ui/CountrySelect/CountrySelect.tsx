import  { memo, useCallback} from 'react'
import { Currency } from 'entities/Currency/model/types/currency'
import { useTranslation } from 'react-i18next'
import Select from 'shared/ui/Select/Select'
import { Country } from 'entities/Country/model/types/country'

interface CountrySelectProps {
  className?: string,
  value?:string,
  readonly?:boolean,
  onChange?:(value:Country) => void
}
 const options = [
      {value:Country.ARMENIA,content:Country.ARMENIA},
      {value:Country.GERMANY,content:Country.GERMANY},
      {value:Country.RUSSIA,content:Country.RUSSIA},
      {value:Country.USA,content:Country.USA},
]

const CountrySelect = memo(({className,onChange,value,readonly}:CountrySelectProps) => {
    const {t} = useTranslation()

    const onChangeHandler = useCallback((value:string) =>{
        onChange?.(value as Country)
    },[onChange])


  return ( 
    <Select readonly = {readonly} onChange={onChangeHandler} label='Ваша страна:' value={value} options={options}/>
  )
})

export default CountrySelect