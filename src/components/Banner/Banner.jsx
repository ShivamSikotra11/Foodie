// import Vector from "";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { useContext } from "react";
import { InfoContext } from "../../store/Data";

const Banner = () => {
  const { BannerContent } = useContext(InfoContext);
  return (
    <> 
      <div className="min-h-[550px] flex justify-center">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 w-[90%]">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div className="sm:hidden" data-aos="fade-down" data-aos-duration="500">
                <img
                  src="biryani5.png"
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              <div data-aos="zoom-in-right" className="max-sm:hidden" data-aos-duration="500">
                <img
                  src="biryani5.png"
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 sm:hidden" data-aos="fade-up" data-aos-duration="500">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Explore Culinary Delights at "Foodie"
                </h1>
                <p className="text-sm text-gray-500 tracking-wide text-justify leading-5">
                  {BannerContent}
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6 sm:pt-0 max-sm:hidden" data-aos="zoom-in-left" data-aos-duration="500">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Explore Culinary Delights at "Foodie"
                </h1>
                <p className="text-sm text-gray-500 tracking-wide text-justify leading-5">
                {BannerContent}
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
