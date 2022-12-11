import { configureStore } from '@reduxjs/toolkit'
import ApiGettingReducer from './features/ApiGetSlice'
import ApiPostingReducer from './features/ApiPostSlice'
import ApiDeletingReducer from './features/ApiDeleteSlice'
import ApiUpdatingReducer from './features/ApiUpdateSlice'

export const store = configureStore({
  reducer: {
    ApiGettingReducer,
    ApiPostingReducer,
    ApiDeletingReducer,
    ApiUpdatingReducer
  },
})