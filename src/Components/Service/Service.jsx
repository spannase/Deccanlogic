import "./Service.css";
import { FaBath, FaBuilding, FaDoorClosed, FaHome } from "react-icons/fa";

export const Service = () => {
  return (
    <div className="ourService">
      <p>get quick way</p>
      <h1>Our Service</h1>

      <div className="service-divs"> 
        <div> <FaHome />
            <h5>Landscape Design </h5> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
        </div>

        <div> <FaBuilding /> 
           <h5>Interior Design</h5> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
        </div> 

        <div> 
            <FaDoorClosed /> 
            <h5>Engineering Plan</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
        </div>

        <div> 
            <FaBath /> 
            <h5>Floor Plan</h5> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
        </div>

      </div>

      <button id="btn">Learn more </button>
    </div>
  );
};
