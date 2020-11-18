import React, {useState, useEffect} from "react";
import logo from "./netflix.png";
import avatar from "./avartar.png";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img className="nav-logo" src={logo} alt="Netflix logo" />

      <img className="nav-avatar" src={avatar} alt="" />
    </div>
  );
}

export default Nav;
