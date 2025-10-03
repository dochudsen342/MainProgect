import { userReducer, userAction } from './model/slice/userSlice'
import { getAuthData } from './model/selectors/getAuthData/getAuthData'
import type { UserSchema, User } from './model/types/userSchema'

export { userReducer, userAction, getAuthData, UserSchema, User }
