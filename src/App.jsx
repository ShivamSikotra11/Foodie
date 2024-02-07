import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Appstore from "./components/Appstore/Appstore";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { InfoContext } from "./store/Data";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const ImageList = [
    {
      id: 1,
      image: "biryani2.png",
    },
    {
      id: 2,
      image: "biryani3.png",
    },
    {
      id: 3,
      image: "biryani5.png",
    },
  ];

  const HeroContent ="Discover a world of culinary delights at your fingertips. Foodie brings the finest cuisines from local eateries to your doorstep. From delectable dishes to delightful desserts, we've got your cravings covered.";
  
  const ServiceContent = "Foodie delivers a diverse culinary experience with a user-friendly platform for effortless ordering. Enjoy swift, reliable delivery, exclusive deals, customizable meal plans, and exceptional customer support. Local partnerships bring global flavors to your doorstep.";
  
  const BannerContent = "Immerse yourself in a world of taste as Foodie curates thefinest dishes from local gems to global flavors. Our diversemenu, featuring culinary treasures, is crafted to satisfyevery craving. Experience the ease of seamless ordering, enjoyswift delivery, and relish exclusive deals that make yourperfect meal just a click away. Elevate your dining momentswith Foodie – a realm where taste seamlessly meetsconvenience, creating a delightful culinary journey for everypalate.";

  const TestimonialContent = "Read glowing testimonials from Foodie customers sharing their delightful experiences, seamless ordering, swift delivery, and exclusive deals. Elevate your dining!";

  const testimonialData = [
    {
      id: 1,
      name: "Samuel D'Souza",
      text: "Foodie has revolutionized my dining experience! The diverse menu and seamless ordering make it my go-to for a delicious meal. The swift delivery and exclusive deals add that extra touch of delight. Foodie truly elevates the joy of dining, exceeding expectations every time.",
      img: "p1.jpg",
    },
    {
      id: 2,
      name: "Bharti Patadia",
      text: "I'm impressed with Foodie's commitment to delivering not just meals but an experience. The global flavors, easy ordering, and fantastic deals make it a standout. It's my top choice for a culinary adventure without leaving home!",
      img: "p2.jpg",
    },
    {
      id: 3,
      name: "Amit Mantri",
      text: "Foodie's convenience is unparalleled. From local favorites to international cuisines, it satisfies every taste bud. The swift delivery and exclusive deals make it the ultimate destination for a delightful dining experience. Foodie has become an integral part of my culinary journey!",
      img: "p3.jpg",
    },
  ];

  const FooterContent = "At Foodie, we transform everyday meals into extraordinary experiences. Fueled by a passion for diverse flavors, our journey is dedicated to bringing local and global cuisines to your doorstep, curating a menu that caters to every palate.";

  return (
    
    <InfoContext.Provider value={{
      ImageList,HeroContent,ServiceContent,BannerContent,TestimonialContent,testimonialData,FooterContent
    }}>
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <Appstore />
        <Testimonial />
        <Footer /> 
      </div>
    </InfoContext.Provider>
  );
}

export default App;
