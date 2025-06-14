import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'shared/ui/Button/Button'
import { counterAction } from '../model/slice/counterSlice'
import { CounterShema } from '../model/types/counterSchema'
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'


const Counter = () => {
    
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const increment = () =>{
        dispatch(counterAction.increment())
    }

    const decrement = () =>{
        dispatch(counterAction.decrement())
    }

  return (
    <div>
        <h1>{value}</h1>
        <Button onClick={increment}>
            increment
        </Button>
        <Button onClick={decrement}>
            decrement
        </Button>
    </div>
  )
}

export default Counter

