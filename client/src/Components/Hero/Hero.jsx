import { TypeAnimation } from "react-type-animation";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div className="container mt-5" id="home">
      <div className="row">
        <div className="col-md-8 text-center">
          <h1 className="fs-1 heading">I'm a</h1>

          <p className="display-6 para gradient-Text">
            <TypeAnimation
              sequence={[
                "Full Stack developer",
                2000,
                "Frontend Developer",
                2000,
                "Designer....",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="text-secondary">
            To seek and maintain full-time position that offers professional
            challenges utilizing interpersonal skills, excellent time management
            and problem-solving skills. Hardworking and passionate job seeker
            with strong organizational skills eager to secure entry-level as
            Frontend or fullstack MERN developer position. Ready to help team
            achieve company goals
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/manu-mn-51818a2a8"
              target="blank"
            >
              <i className="bx bxl-linkedin-square fs-1 p-2"></i>
            </a>

            <a href="https://www.instagram.com/?hl=en" target="blank">
              <i className="bx bxl-instagram-alt fs-1 p-2"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100008842788248"
              target="blank"
            >
              <i className="bx bxl-facebook-circle fs-1 p-2"></i>
            </a>
            <a href="https://github.com/manumn95" target="blank">
              <i className="bx bxl-github fs-1 p-2"></i>
            </a>
            <a
              href="https://app.netlify.com/teams/manumn95/overview"
              target="blank"
            >
              <i className="bx bxl-netlify fs-1 p-2"></i>
            </a>
          </div>
          <div className="d-flex justify-content-center mt-5 gap-2">
            <button className="btn btn-warning">Download Resume</button>
            <button className="btn btn-success">Hire me</button>
          </div>
        </div>

        <div className="col-md-4 mt-5 ">
          <div className="img "></div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 scroll ">
        <a href="#about" className="text-white">
          <i className="bx bx-mouse "></i>
          <span>Scroll Down</span>
          <i className="bx bx-down-arrow-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
