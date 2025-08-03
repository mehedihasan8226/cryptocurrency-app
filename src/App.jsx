
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLaybout from "./components/AppLaybout"
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, News } from "./components"



const App = () => {

  const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLaybout />,
    children:[
      {
    path:'/',
    element: <Homepage />
  },
      {
    path:'/exchanges',
    element: <Exchanges />
  },
  {
    path:'/cryptocurrencies',
    element: <Cryptocurrencies />
  },
  {
    path:'/crypto/:coinId',
    element: <CryptoDetails />
  },
  {
    path:'/news',
    element: <News />
  },

    ]
  },
])

return <RouterProvider router={router} />

}

export default App