import { createSlice } from '@reduxjs/toolkit'
import { PAGE_SIZE } from '../../constants/constaints';

const initialState = {
  news: [],
  currentNews: {},
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
    setCurrentNews: (state, action) => {
      state.currentNews = action.payload;
    },
    setFilters: (state, action) => {
      const {key, value} = action.payload
      state.filters = {...state.filters, [key]: value};
    },
    }
  },
 )

export const { getNews, setFilters, setCurrentNews } = newsSlice.actions
export default newsSlice.reducer