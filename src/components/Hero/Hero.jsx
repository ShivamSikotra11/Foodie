import { useContext, useState } from "react";
import { InfoContext } from "../../store/Data";

// const ImageList = [
//   {
//     id: 1,
//     image: "biryani2.png",
//   },
//   {
//     id: 2,
//     image: "biryani3.png",
//   },
//   {
//     id: 3,
//     image: "biryani5.png",
//   },
// ];

const bgImage = {
  backgroundImage: `url('vector3.png')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(1);
  const { ImageList,HeroContent } = useContext(InfoContext)
  return (
    <div
      className="min-h-[550px] sm:min-h-[600px]bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center "
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              Welcome to the Foodie Zone
            </h1>

            <p className="text-sm">
            {HeroContent}
            </p>

            <div className="">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                Order Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative ">
            {/* Main image section */}
            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden ">
              <img
                src={ImageList[imageId - 1].image}
                alt="Foodie"
                className="w-[300px] sm:w-[450px]  mx-auto animate-custom-spin"
              />
            </div>

            {/* image list section */}
 
            <div className="flex lg:flex-col lg:top-1/4  lg:py-2  justify-center gap-4 absolute lg:-right-10  max-lg:bottom-[0px]  bg-white/30 rounded-full ">
              {ImageList.map((item) => (
                <img
                  src={item.image}
                  key={item.id}
                  onClick={() => setImageId(item.id)}
                  alt=""
                  className="max-w-[80px] object-contain inline-block hover:scale-105 cursor-pointer duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
