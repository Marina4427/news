import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_BASE_URL;

export const getNews = async (page_number = 1, page_size = 10) => {
    try {
        const response = await axios.get(`${url}search`, {
            params: { apiKey: apiKey,
                page_number, 
                page_size,
            }});
                
        return response.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};