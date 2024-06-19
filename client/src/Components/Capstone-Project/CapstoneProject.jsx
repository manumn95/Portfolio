import "./CapstoneProject.css";
import video from "../../assets/videos.mp4";

const CapstoneProject = () => {
  return (
    <>
      <div className="container mt-5" id="projects">
        <h1 className="gradient-Text text-center">Projects</h1>
        <h4 className="mt-3">Capstone-Project:</h4>

        <div className="row  ">
          <div className="col-md-6 p-5">
            <h4 className="gradient-Text">Track-Fit (Fitness Tracker App )</h4>
            <p>Description:</p>
            <p>
              The Fitness App is a comprehensive application designed to help
              users track their fitness goals, monitor daily activities, and
              maintain a healthy lifestyle. It provides features such as heart
              rate monitoring, step tracking, calorie counting, and workout
              analysis.
            </p>
            <ul className="text-secondary">
              <li>
                User Authentication: Secure login and registration for users.
              </li>
              <li>
                Dashboard: Overview of daily fitness stats, including heart
                rate, steps taken, and calories burned.
              </li>
              <li>Goals: Set and track personal fitness goals.</li>
              <li>Workouts: Log workouts and view detailed statistics.</li>
              <li>
                Charts: Visual representation of fitness data using pie and line
                charts.
              </li>
            </ul>
            <div className="d-flex justify-content-center gap-5">
              <a
                href="https://trackfit-fitness-app.netlify.app"
                target="blank"
                className="btn btn1"
              >
                Live
              </a>
              <a
                href="https://github.com/manumn95/Track_Fit"
                target="blank"
                className="btn btn1"
              >
                Source
              </a>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex flex-column align-items-center justify-content-center">
            <video
              src={video}
              muted
              loop
              autoPlay
              style={{ width: "100%" }}
            ></video>
            <p className="text-center text-warning lead">Demo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapstoneProject;
