import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {

  const count = simplified? 10: 100;

  console.log(simplified);
  

   const {data: cryptoList, isFetching} = useGetCryptosQuery(count)
   const [cryptos, setCryptos ] = useState(cryptoList?.data?.coins)

   console.log(cryptos);
  
  if(isFetching) return 'Loading...'
 

  return (
    <>
    <div className='cryto-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full'>
      {cryptos?.map((currency)=>(
        <div className="crypto-card border p-4 rounded" key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
              <div>
                <div className='flex justify-between'>
                  <p>{`${currency.rank}. ${currency.name}`}</p>
                  <img src={currency.iconUrl} alt="" 
                    className='w-9'
                  />
                </div>
                <div>
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
                </div>
              </div>
          </Link>
        </div>
      ))

      }
    
    
    </div>


    

    </>
  )
}

export default Cryptocurrencies