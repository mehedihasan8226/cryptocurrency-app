import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-key': import.meta.env.VITE_CRYPTO_API_KEY,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=> ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins/?limit=${count}`),
             keepUnusedDataFor: 60, // cache for 60s
             refetchOnMountOrArgChange: false, 
        })
    })
})


export const {
    useGetCryptosQuery,
} = cryptoApi


