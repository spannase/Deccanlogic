import "./Header.css";
import img from "../Images/img_7.jpg";
import logo from "../Images/logo.png";
 
export const Header = () => {
  return (
    <div style={{ height: "600px" }}>
      <div
        className="hero-2 overlay"
        style={{ "backgroundImage": `url(${img})` }}
      >
        <div className="container">
          <div className="row ">
            <div className="Nav">
              <div>
                <img src={logo} alt="img" width="40px" />

                <span className="icon-name"> ARCHOUSE </span>
              </div>

              <div style={{ display: "flex" }}>
                <p>Home</p>
                <p>Service</p>
                <p>projects</p>
                <p>Contact us</p>
              </div>
            </div>

            <div className="interial-div">
              <h1>
                <span>Interior Design &</span>
                <span> architecture</span>

                <br />

                <button className="btn">click here</button>
              </h1>

              <div className="orange-div"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
