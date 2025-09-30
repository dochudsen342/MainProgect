import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { User } from 'entities/User'
import { userAction } from 'entities/User/model/slice/userSlice'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsenameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsenameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI
    try {
      const responce = await extra.api.post('/login', authData)
      if (!responce.data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(responce.data))
      dispatch(userAction.setAuthData(responce.data))
      return responce.data
    } catch (error) {
      return rejectWithValue('Неверный логин или пароль')
    }
  },
)
