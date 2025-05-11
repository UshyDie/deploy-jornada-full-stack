import axios from 'axios';
import 'dotenv/config';

// const { NODE_ENV } = process.env;
// const URL = NODE_ENV === 'development' ? 'http://localhost:3001/api' : '/api';
const URL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD;

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
