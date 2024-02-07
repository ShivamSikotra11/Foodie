import Slider from "react-slick"
import TestimonialUnit from "./TestimonialUnit";
import { InfoContext } from "../../store/Data";
import { useContext } from "react";


const Section = () => {
  const { testimonialData } = useContext(InfoContext);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6 ">
      <Slider {...settings}>
      {testimonialData.map((data) => <TestimonialUnit data={data} />)}
      </Slider>
    </div>
  );
}

export default Section;