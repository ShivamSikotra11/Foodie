import { useContext } from "react";
import Cards from "./Cards";
import Header from "./Header";
import { InfoContext } from "../../store/Data";
const Services = () => {
  const { ServiceContent } = useContext(InfoContext);
  return <div className="py-10" id="services">
    <div className="container">
      <Header val={"Services"} content={ServiceContent} />
      <Cards/>
    </div>
  </div> 
}
export default Services;