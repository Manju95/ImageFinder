import axios from 'axios';
import { ApiResponse, getApiResponse } from './Utils/utils';

axios.defaults.baseURL = process.env.REACT_APP_UNSPLASH_API_BASE_URL;

const headers = {
    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`,
    'Accept-Version': 'v1'
}

const get = (url) =>{
    return axios.get(url,{headers:headers}).then(res=>{
        if(res.status === 200){
            var apiResponse = new ApiResponse(res.status,res.statusText,res.data)
            return apiResponse;
        }
        else{
           return Promise.resolve(getApiResponse(res.status));
        }
    }).catch(error=>{
        return Promise.reject(error);
    });
}

export const getImages = (url,searchKey,page) => {
    let urlWithParams = `${url}?page=${page}&query=${searchKey}&collections=${searchKey}`
    return get(urlWithParams);
}