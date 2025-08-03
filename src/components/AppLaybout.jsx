import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const AppLaybout = () => {
  return (
    <>
        <div className="app-layout ">
      <div className="flex">
      <div className="sidenav ">
        <Navbar />
      </div>
      <div className="main md:ml-72 mt-20 w-full ">
        <Outlet />
      </div>
      </div>
      <div className="footer">

      </div>
    </div>
    </>
  )
}

export default AppLaybout