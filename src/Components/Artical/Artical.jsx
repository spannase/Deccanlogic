import "./Artical.css";

import decor1 from "../Images/decor1.jpg"
import decor2 from "../Images/decor4.jpg";
import decor3 from "../Images/decor3.jpg";

export const Artical = () => {
  return (
    <div className="main">
      <div className="left">
        <span  >Archouse</span>
        <h1>We design for amazing people</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut
          rem aperiam molestiae odio reprehenderit corrupti velit corporis odit
          veritatis alias exercitationem iusto.
        </p>

        <button className="button">Subscribe</button>
      </div>

      <div className="right">
            <div><img src={decor1} alt="" /></div>
            <div><img src={decor2} alt="" /></div>
            <div><img src={decor3} alt="" /></div>
      </div>
    </div>
  );
};
