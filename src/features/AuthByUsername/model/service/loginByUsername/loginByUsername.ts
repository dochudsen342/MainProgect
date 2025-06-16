import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User";
import { userAction } from "entities/User/model/slice/userSlice";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsenameProps {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsenameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const responce = await axios.post('http://localhost:8000/login', {
                username,
                password,
            })
            if (!responce.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(responce.data))
            thunkAPI.dispatch(userAction.setAuthData(responce.data))
            return responce.data
        } catch (error){
            return thunkAPI.rejectWithValue('error')
        }
    }
)