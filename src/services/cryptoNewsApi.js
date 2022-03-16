import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_BING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const setupRequest = (url) => ({url,headers:cryptoNewsApiHeaders});

export const cryptoNewsApi = createApi({
    reducerPath : "cryptoNewsApi",
    baseQuery : fetchBaseQuery({baseUrl : process.env.REACT_APP_RAPIDAPI_BING_BASE_URL}),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({
            query : ({category,limit}) => (setupRequest(`/news/search?q=${category}&count=${limit}`))
        })
    })
})



export const { useGetCryptoNewsQuery } = cryptoNewsApi;