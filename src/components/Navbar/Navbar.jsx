import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Navbar = () => {
  return <>
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 scroll-smooth">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center ">

          <div>
            <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
              <img src="food-logo.png" alt="Foodie Zone" className="w-10" />
              Foodie
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <DarkMode/>
            </div>

            <ul className="hidden  sm:flex gap-4">

              <li><a href="" className="inline-block p-4 hover:text-primary">Home</a></li>
              <li><a href="#footer" className="inline-block p-4 hover:text-primary">About</a></li>
              <li><a href="#services" className="inline-block p-4 hover:text-primary">Services</a></li>

            </ul>

            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3 sm:hidden">
              Order
              <FaCartShopping className="text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>

        </div>
      </div>
    </div>
  </>
}
export default Navbar;