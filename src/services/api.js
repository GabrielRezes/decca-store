import { useContext } from 'react';
// import { AuthContext } from '../context/Auth';
import axios from 'axios';

// const { urlS3 } = useContext(AuthContext)

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export const getUrlAccess = async () => {
  return api.get('/s3Url', { headers: {
      "Content-Type" : "application/json",
      "X-API-Key": `${import.meta.env.VITE_API_KEY}`
    }
  })
};

export const postImage = async (file) =>  {
  return axios.put(urlS3, { headers: {
    "Content-Type" : "multipart/form-data"
    },
    body: file
  })
}

export const getImages = async (url) => {
  return api.get('/objects', { headers: {
      "Content-Type" : "application/json",
      "X-API-Key": `${import.meta.env.VITE_API_KEY}`
    }
  })  
}


