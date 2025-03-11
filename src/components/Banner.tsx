
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#97ce4c" }}>
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to="/" style={{ fontFamily: "WubbaLubbaDubDub"}}>
            <img src="/logo.png" style={{height:'10svh'}} alt="Logo" />
          </Link>
          <button 
            className="navbar-toggler blue-text" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon blue-text"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link blue-text" to="/character/1">Personajes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link blue-text" to="/location/1">Ubicaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link blue-text" to="/episode/1">Episodios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  

export default Banner