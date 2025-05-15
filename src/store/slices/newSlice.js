import { createSlice } from '@reduxjs/toolkit'
import { PAGE_SIZE } from '../../constants/constaints';

const initialState = {
  news: [],
  filters: {
    page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: "",
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNews: (state, action) => {
      state.news = action.payload;
    },
    setFilters: (state, action) => {
      const {key, value} = action.payload
      state.filters = {...state.filters, [key]: value};
    },
    }
  },
 )

// Action creators are generated for each case reducer function
export const { getNews, setFilters } = newsSlice.actions

export default newsSlice.reducer