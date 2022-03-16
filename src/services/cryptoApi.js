import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const headers = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
};

const setupRequest = (url) => ({url,headers});

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl : process.env.REACT_APP_RAPIDAPI_BASE_URL,headers}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (limit) => (setupRequest(`/coins/?limit=${limit}`))
        })
    })
    
})

export const { useGetCryptosQuery } = cryptoApi;