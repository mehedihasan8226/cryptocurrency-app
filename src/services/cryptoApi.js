import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-key': '8e6d3ac7aemsh1da85bf7eea3b52p117ed2jsn39b19863a966',
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


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',
//   qs: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     limit: '50',
//     offset: '0',
//     orderBy: '24hVolume',
//     orderDirection: 'desc'
//   },
//   headers: {
//     'x-rapidapi-key': '8e6d3ac7aemsh1da85bf7eea3b52p117ed2jsn39b19863a966',
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//   }
// };


