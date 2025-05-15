import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slices/newSlice'
import { newsApi } from './services/newsApi'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})