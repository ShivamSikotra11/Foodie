const ServicesData = [
  {
    id: 1,
    image: "mt.png",
    name: "Tropical Paradise Mocktail",
    description:
      "Transport your taste buds to a blissful oasis with our Tropical Paradise Mocktail. A medley of pineapple, coconut, and citrus juices, shaken with ice, creating a vibrant and refreshing non-alcoholic concoction perfect for any celebration.",
  },
  {
    id: 2,
    image: "mango.png",
    name: "Mango Tango Smoothie",
    description:
      "Experience a tropical escape with our Mango Tango Smoothie. Blending ripe mangoes, creamy yogurt, and a hint of honey, this smoothie is a refreshing dance of sweet and tangy notes that transports you to sun-kissed beaches with every sip.",
  },
  {
    id: 3,
    image: "coffee.png",
    name: "Cold Coffee",
    description:
      "Satisfy your caffeine cravings with our Iced Caramel Coffee Bliss. Cold-brewed to perfection, this velvety concoction combines rich espresso with cold milk, ice, and a drizzle of caramel, creating a luscious and invigorating treat for coffee enthusiasts.",
  },
];

const Cards = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-14  md:gap-5 place-items-center">
        {ServicesData.map(({ id, image, name, description }) => {
          return (
            <div data-aos="zoom-in" data-aos-duration="300" className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4  shadow-xl  cursor-pointer " key={id}>
              <div className="h-[100px]">
                <img src={image} alt="Foodie" className={`max-w-[190px] mx-auto block group-transform -translate-y-16 
                group-hover:scale-105 group-hover:rotate-6 duration-300 ${id === 3 ? 'max-w-[90px]' : ''}`} />
              </div>
              <div className="p-4 text-center " >
                <h1 className="text-xl font-bold mb-2">{name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-3 group-hover:line-clamp-none">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;

{/* <div data-aos="zoom-in" data-aos-duration="300" class="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:bg-primary hover:text-white duration-300 shadow-xl aos-init aos-animate"><div class="h-[100px]"><img src="/assets/biryani2-0YgeW9Uq.png" alt="" class="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"></div><div class="p-4 text-center"><h1 class="text-xl font-bold">Biryani</h1><p class="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.</p></div></div> */}