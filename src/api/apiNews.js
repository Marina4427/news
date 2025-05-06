import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_BASE_URL;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${url}search`, {
      params: { apiKey: apiKey, page_number, page_size, category, keywords },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${url}available/categories`, {
      params: { apiKey: apiKey },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${url}latest-news`, {
      params: { apiKey: apiKey },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};