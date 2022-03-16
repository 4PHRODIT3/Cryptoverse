import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_COINRANKING_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
};

const setupRequest = (url) => ({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl : process.env.REACT_APP_RAPIDAPI_COINRANKING_BASE_URL}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (limit) => (setupRequest(`/coins/?limit=${limit}`))
        })
    })
    
})

export const { useGetCryptosQuery } = cryptoApi;