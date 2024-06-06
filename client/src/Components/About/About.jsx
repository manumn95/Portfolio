import "../About/About.css";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <>
      <section className="about-section mt-5 container" id="about">
        <h1 className="section-title gradient-Text text-center about-section">
          ABOUT ME
        </h1>
        <div className="row mt-5 ">
          <div className="col-md-12 d-flex gap-5">
            <img src={profile} className="profile-img"></img>
            <div className="d-flex flex-column justify-content-center ">
              <h3>Introduction:</h3>
              <p className="gradient-Text mt-3">
                Hello! I'm Manu MN, a passionate and dedicated Full Stack MERN
                Developer. After a career break of six years, I have
                successfully transitioned back into the tech industry by
                completing a Full Stack MERN course from GUVI. This
                comprehensive program has equipped me with a solid understanding
                of modern web development technologies and hands-on experience
                in building robust applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
