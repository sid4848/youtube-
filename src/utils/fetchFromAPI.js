const axios = require("axios");

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url, query) => {
  const options = {
    params: { q: query, part: "snippet", maxResults: 113 },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
