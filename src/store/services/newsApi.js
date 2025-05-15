
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_BASE_URL;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getNews: builder.query({
      keepUnusedDataFor: 0,
      query: (params) => {
        const {
          page_number =1,
          page_size = 10,
          category,
          keywords,
        } = params || {};
        return {
          url: "search" ,
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          }
        }
      },
    }),

    getLatestNews: builder.query({
      query: () => {
        return {
          url: "latest-news",
          params: {
            apiKey: API_KEY,
          }
        }
      },
    }),
    getCategories: builder.query({
      query: () => {
        return {
          url: "available/categories",
          params: {
            apiKey: API_KEY,
          }
        }
      },
    }),


  }),
})

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } = newsApi