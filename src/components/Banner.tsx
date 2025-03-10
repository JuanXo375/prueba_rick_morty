
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#97ce4c" }}>
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to="/" style={{ fontFamily: "WubbaLubbaDubDub"}}>
            Rick and Morty
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/characters">Personajes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/locations">Ubicaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/episodes">Episodios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  

export default Banner