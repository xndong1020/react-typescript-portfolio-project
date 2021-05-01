import { AuthActionTypes } from '../_actions/auth/actionTypes'
import { getItem } from '../_utils/localStorage'

export interface User {
  email: string
  username: string
  access_token: string
}

export interface AuthReducerState {
  user: User | null
  error: string | null
  isLoading: boolean
  hasLoggedIn: boolean
}
const initUser = getItem<User>('user')

const initValue: AuthReducerState = {
  user: initUser,
  error: null,
  isLoading: false,
  hasLoggedIn: !!initUser
}

export interface LoginUser {
  type: AuthActionTypes.LOGIN_USER
}

export interface LoginUserSuccess {
  type: AuthActionTypes.LOGIN_USER_SUCCESS
  payload: User
}

export interface LoginUserFail {
  type: AuthActionTypes.LOGIN_USER_FAIL
  error: string | null
}

export type AuthAction = LoginUser | LoginUserSuccess | LoginUserFail

export const authReducer = (
  state: AuthReducerState = initValue,
  action: AuthAction
): AuthReducerState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER:
      return { ...state, isLoading: true }
    case AuthActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        hasLoggedIn: true
      }
    case AuthActionTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        user: null,
        error: action.error,
        isLoading: false,
        hasLoggedIn: false
      }
    default:
      return state
  }
}
