import "./Projects.css";
import project1 from "../Images/project1.jpg";
import project2 from "../Images/project2.jpg";
import project3 from "../Images/project3.jpg";

export const Project = () => {
  return (
    <div className="projects"> 
      <p  style={{color:"rgba(255, 166, 1, 0.993)", marginBottom:"0"}}>get quick way</p>

      <h1>Our Projects</h1>
      <p  className="about-project"> 
        Delectus voluptatum distinctio quos eius excepturi doloribus officia ea 
        molestias beatae laudantium, quam odio ipsum veritatis est maiores velit 
        quasi blanditiis et natus accusamus itaque. 
      </p>

      <div className="project-divs">
          <div><img src={project1} alt="" /></div>
          <div><img src={project3} alt="" /></div>
          <div><img src={project2} alt="" /></div>
      </div>

      <div className="project-btn">
        <button>Read more</button> 
        <button>Details</button>
      </div>
    </div>
  );
};
