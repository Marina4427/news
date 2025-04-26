import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_BASE_URL;

export const getNews = async () => {
    try {
        const response = await axios.get(`${url}latest-news`, {
            params: { apiKey: apiKey, language: "en", page_size:5}});
                
        return response.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};