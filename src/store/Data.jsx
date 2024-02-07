import { createContext } from "react";

export const InfoContext = createContext({
  ImageList: [],
  HeroContent:"",
  ServiceContent:"",
  BannerContent:"",
  TestimonialContent:"",
  testimonialData:[],
  FooterContent:"",
});