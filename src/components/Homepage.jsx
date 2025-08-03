
import millify from "millify"
// import { Link } from "react-router-dom"
import { useGetCryptosQuery } from "../services/cryptoApi"
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const Homepage = () => {

  const {data, isFetching,error } = useGetCryptosQuery(10);

  const {stats} = data?.data || {}

  // console.log(data);

  if(isFetching) return <div>Loading...</div>
  
  if(error) return <div>Error loading data.</div>
  

  return (
    <>

    <div className="w-full">
        <h2 className="mb-5 text-2xl font-bold">Global Crypto Stats</h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3  w-8/10">
   
          <div className="">
            <p>Total Cryptocurrencies</p>
            <p>{stats.totalCoins}</p>
        </div>
        <div className="">
            <p>Total Exchanges</p>
            <p>{stats.totalExchanges}</p>
        </div>
        <div>
            <p>Total Market Cap</p>
            <p>{stats.totalMarketCap}</p>
        </div>
        <div>
            <p>Total 24th Volume</p>
            <p>{millify(stats.total24hVolume)}</p>
        </div>
        <div>
            <p>Total Markets</p>
            <p>{stats.totalMarkets}</p>
        </div>
        </div>


      

{/* ////////////////// */}
    <div className="mt-15"> 

   
      <div className="flex justify-between pr-10 w-full">
      <div className="text-2xl mb-3">Top 10  cryptocurrencies in the world</div>
      <div className="text-blue-600 text-lg"><Link to='/cryptocurrencies'>Show More</Link></div>
      </div>
      <Cryptocurrencies simplified />

      <div className="flex justify-between pr-10 mt-8 w-full">
      <div className="text-2xl">Latest Crypto News</div>
      <div className="text-blue-600 text-lg"><Link to='/news'>Show More</Link></div>
      </div>
      <News simplified />
       </div>

       </div>
    </>
  )
}

export default Homepage