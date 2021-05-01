import axios from 'axios'
import { Dispatch } from 'redux'
import * as Sentry from '@sentry/react'

import { setItem } from '../../_utils/localStorage'
import { AuthActionTypes } from './actionTypes'

const httpClient = axios.create({
  baseURL: 'https://c2f621ba-e886-4c45-8968-15f387b3a571.mock.pstmn.io/'
})

export const LoginUserAsync = (user: {
  email: string
  password: string
}): ((dispatch: Dispatch) => Promise<void>) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: AuthActionTypes.LOGIN_USER })
    try {
      const res = await httpClient.post<{ access_token: string }>('auth', {
        ...user
      })
      if (res.data.access_token) {
        const userInfo = await httpClient.post<{
          username: string
          email: string
        }>('me')

        const userData = {
          ...(userInfo.data || {}),
          access_token: res.data.access_token
        }

        // save userInfo && token in localStorage
        setItem('user', userData)
        dispatch({
          type: AuthActionTypes.LOGIN_USER_SUCCESS,
          payload: userData
        })
      }
    } catch (err) {
      Sentry.captureException(err)
      dispatch({
        type: AuthActionTypes.LOGIN_USER_FAIL,
        error: err
      })
    }
  }
}
