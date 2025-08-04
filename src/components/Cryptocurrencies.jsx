import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {

  const count = simplified? 10: 100;

  console.log(simplified);
  

   const {data: cryptoList, isFetching} = useGetCryptosQuery(count)
  //  const [cryptos, setCryptos ] = useState(cryptoList?.data?.coins)
   const [cryptos, setCryptos ] = useState([])
   const [searchTerm, setSerchTerm] = useState('')


   useEffect(()=>{

    const filterData = cryptoList?.data?.coins.filter((coins)=>
      coins.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  setCryptos(filterData)  
   },[cryptoList,searchTerm])

   console.log(cryptos);
  
  if(isFetching) return 'Loading...'
 

  return (
    <>
    
    {!simplified && (

      <div className='flex justify-center mb-5 w-full'>
        <input placeholder='Search cryptocurrency' 
        onChange={(e)=>setSerchTerm(e.target.value)}
        className='border border-gray-400 outline-0 rounded w-sm p-1'
        />
      </div>

    )}
      

    <div className='cryto-card-container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full'>
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