import { isNil } from 'lodash'
import { AnyObject } from 'yup/lib/types'

export const setItem = (key: string, state: AnyObject): void => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (e) {}
}

export const getItem = <T>(key: string): T | null => {
  try {
    const serializedState = localStorage.getItem(key)
    if (isNil(serializedState)) return null
    return JSON.parse(serializedState) as T
  } catch (e) {
    return null
  }
}
