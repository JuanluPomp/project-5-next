import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import type {RootState} from '@/store/index'

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action)
        const {favorites} = state.getState() as RootState
        if(action.type === 'toogleFavorites'){
            localStorage.setItem('favorites', JSON.stringify(favorites))
            return
        }
    }
}