// NavBar.tsx

import { useState } from "react";

const NavBar = () => {
    const elementNames = ["home", "projects", "contact"]
    const [active, setActive] = useState(elementNames[0]);

    const handleActiveState = (value : string) => {
      setActive(value);
    }

    return (
      <section className="position-fixed top-0 start-50 translate-middle-x text-light">
        <div className="container shadow-sm rounded-pill bg-dark d-flex align-items-center justify-content-center gap-4 py-1 px-5 mt-1"
        style={{border: "1px solid rgba(255, 255, 255, 0.1"}}>
        <a href="#home" onClick={() => handleActiveState(elementNames[0])} className={`btn btn-sm ${active === elementNames[0] ? "text-dark bg-light fw-bold" : "text-light bg-transparent"}`}>
          Home
        </a>
        <a href="#projects" onClick={() => handleActiveState(elementNames[1])} className={`btn btn-sm ${active == elementNames[1] ? "text-dark bg-light fw-bold" : "text-light bg-transparent"}`}>
          Projects
        </a>
        <a href="#footer" onClick={() => handleActiveState(elementNames[2])} className={`btn btn-sm ${active == elementNames[2] ? "text-dark bg-light fw-bold" : "text-light bg-transparent"}`}>
          Contact
        </a>
        </div>
    </section>
    );
  };

export default NavBar;