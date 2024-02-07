import { useContext } from "react";
import Header from "../Services/Header";
import Section from "./Section";
import { InfoContext } from "../../store/Data";

const Testimonial = () => {
  const { TestimonialContent } = useContext(InfoContext);
  return (
    <div className="py-10">
      <div className="container">
        <Header val={"Testimonial"} content={TestimonialContent} />
        <Section/>
      </div>
    </div>
  );
};

export default Testimonial;
