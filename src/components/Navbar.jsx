import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  Button,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiMenu
} from "react-icons/hi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <=  770) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="">
      {/* Hamburger button */}
      <button
        className="p-2 text-gray-700 md:hidden md:w-64 bg-white z-10 "
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <HiMenu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar aria-label="Sidebar menu" className="w-64 h-screen  fixed  bg-white shadow">
          <SidebarItems>
            <SidebarItemGroup>
              <Link to="/">
              <SidebarItem  icon={HiChartPie}>
                Home
              </SidebarItem>
              </Link>

              <Link to="/cryptocurrencies">
              <SidebarItem icon={HiViewBoards} label="Pro" labelColor="dark">
                Cryptocurrencies
              </SidebarItem>
              </Link>

              <Link to="/exchanges">
              <SidebarItem icon={HiInbox} label="3">
                Exchanges
              </SidebarItem>
              </Link>

              <Link to="/news">
              <SidebarItem icon={HiUser}>
                News
              </SidebarItem>
              </Link>

            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      )}
    </div>
  );
};

export default Navbar;
