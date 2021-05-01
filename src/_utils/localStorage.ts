import { isNull } from "lodash";

export const setItem = (key: string, state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {}
};

export const getItem = <T>(key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (isNull(serializedState)) return null;
    return JSON.parse(serializedState) as T;
  } catch (e) {
    return null;
  }
};
