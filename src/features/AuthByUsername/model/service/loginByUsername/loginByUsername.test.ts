import { StateSchema } from '@/app/providers/StoreProvider'
import { userAction } from '@/entities/User'
import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('loginByUsername.test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema
  let extra: { api: typeof axios }
  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
    extra = { api: mockedAxios }
  })

  test('success login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userValue }))
    const action = loginByUsername({ username: 'admin', password: '123' })
    const result = await action(dispatch, getState, extra)
    expect(dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue))
    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })

  // test('error login', async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //     const action = loginByUsername({ username: '123', password: '123' });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe('rejected');
  //     expect(result.payload).toBe('error');
  // });
})
