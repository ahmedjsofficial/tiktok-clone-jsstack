import axios from "axios";

const baseUrl = 'https://tiktok-all-in-one.p.rapidapi.com';
const options = {
  params: {region: 'US'},
  headers: {
    'X-RapidAPI-Key': 'aebaa8e0eamshf4a21968e560b82p1c4ba4jsn160d4cc2a65d',
    'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
  }
};

export const useTikTokAPI = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options)

  return data;
}