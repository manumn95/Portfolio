import { useState } from "react";
import "./Navbar.css";
import ContactModal from "../ContactModal";

const Navbar = () => {
  const [ismodal, setIsModal] = useState(false);

  return (
    <>
      <div className="conatiner-fluid background sticky-top">
        <nav className=" container navbar navbar-expand-lg navbar-dark  ">
          <div className="container-fluid">
            <a className="navbar-brand logo gradient-Text  p-2 fs-3" href="#">
              Manu MN
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul
                className="navbar-nav d-flex justify-content-center gap-3"
                style={{ width: "100%" }}
              >
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#about">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="btn1 text-white  "
                onClick={() => setIsModal(true)}
              >
                Contact Me
              </button>
            </div>
          </div>
        </nav>
      </div>
      {ismodal && (
        <ContactModal show={ismodal} setIsmodal={setIsModal}></ContactModal>
      )}
    </>
  );
};

export default Navbar;
