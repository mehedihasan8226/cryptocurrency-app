// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const  cryptoNewsHeaders = {
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '8e6d3ac7aemsh1da85bf7eea3b52p117ed2jsn39b19863a966',
//     'X-BingApis-SDK': 'true'
// } 


// const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

// const createRequest = (url)=> ({url, headers: cryptoNewsHeaders})



// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({baseUrl}),
//     endpoints: (builder) =>({
//         getNewsCryptos: builder.query({
//            query: ({ newsCategory, count }) =>
//          createRequest(
//             `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//              keepUnusedDataFor: 60, 
//              refetchOnMountOrArgChange: false, 
//         })
//     })
// })


// export const {
//     useGetNewsCryptosQuery,
// } = cryptoNewsApi




import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://newsapi.org/v2';

const newsApiHeaders = {
  'X-Api-Key': import.meta.env.VITE_NEWS_API_KEY
};

const createRequest = (url) => ({ url, headers: newsApiHeaders });



export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNewsCryptos: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(`/everything?q=${newsCategory}&pageSize=${count}&language=en`),
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: false,
    }),
  }),
});

export const { useGetNewsCryptosQuery } = cryptoNewsApi;
