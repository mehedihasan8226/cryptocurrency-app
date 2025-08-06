import React, { useState } from 'react'
import moment from 'moment/moment';
import { useGetNewsCryptosQuery } from '../services/ctyptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';

const News = ({simplified}) => {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const {data, isFetching} = useGetCryptosQuery(100)

const { data: cryptoNews } = useGetNewsCryptosQuery({
  newsCategory,
  count: simplified ? 10 : 50,
});

// console.log(cryptoNews);
// console.log("coin",data?.data?.coins.name);


if(!cryptoNews) return 'Loading...'



  return (

    <>
    {!simplified && (

  <div className='mb-5 border border-gray-200 w-2/12'>
  <select
    name=""
    id=""
    className='w-full text-sm py-1 h-8 border-none outline-none'
    onChange={(e) => setNewsCategory(e.target.value)}
  >
    <option value="Cryptocurrency">Cryptocurrency</option>
    {
      data?.data?.coins.map((coin) => (
        <option key={coin.name} value={coin.name}>{coin.name}</option>
      ))
    }
  </select>
</div>

    )
    }
    
    


    <div className='crypto-card-container grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full'>
      {cryptoNews?.articles?.map((news, index) => (
        <div className="crypto-card  p-4 rounded-md bg-white shadow-2xl " key={index}>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className='flex flex-col justify-between h-full space-y-4'>
            <div>
              <div className='flex justify-between gap-2'>
            
                <p className='font-semibold hover:underline hover:text-blue-400'>{news.title}.</p>
       
                {news.urlToImage && (
                  <img src={news.urlToImage} alt="" className='w-16 ' />
                )}
              </div>
              <div>
                <p>{news.description > 100 ?
                  `${news.description.substring(0,100)}...`
                  : news.description
                  }</p>
              </div>
              </div>
            <div className=''>
            <div className='flex justify-between'>
              <div className='flex gap-1'>
                
                {news.urlToImage && (
                  <img src={news.urlToImage} alt="" className='w-6 h-6' />
                )}
                <p className='text-xs'>{news.source.name}</p>
              </div>
              <p className='text-xs'>{moment(news.publishedAt).startOf('ss').fromNow()}</p>
            </div>
            </div>

            </div>
           
          </a>
        </div>
      ))}
    </div>

        </>
  )

}

export default News


