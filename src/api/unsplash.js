import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID hWJ2-sSBQJoM_hJycbYCgWD-bOx-4sJkiTOydvaOzmA'
      }
});
