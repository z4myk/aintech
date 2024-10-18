import React, {useState} from 'react'

import logoat from '../assets/logoat.png'
import eeuuflag from '../assets/eeuuflag.png'
import argflag from '../assets/argflag.png'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
 
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

  const [translate, setTranslate] = useState(false);

  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbarBackground text-light shadow fixed-top ">
  <div className="container-fluid ">
    <a className="navbar-brand titles " href="#"><img src={logoat} alt="Aintech LOGO" className="logoAintech" /><small></small></a>
    <button className="navbar-toggler "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      {translate === false ? (
        <div className="navbar-nav mx-2 ms-auto">
 
        <a className="text-light nav-link" href="#">Inicio</a>
        
        <a className="nav-link text-light"  href="#nosotros">Sobre Nosotros</a>
        <a className="nav-link text-light" href="#servicios">Servicios</a>
        <a className="nav-link text-light" href="#portfolio">Portfolio</a>
        <a className="nav-link text-light" href="#contacto">Contacto</a>
        </div>
      ) : (
        <div className="navbar-nav mx-2 ms-auto">
          
        <a className="text-light nav-link" href="#">Home</a>
        
        <a className="nav-link text-light"  href="#about">About us</a>
        <a className="nav-link text-light" href="#services">Services</a>
        <a className="nav-link text-light" href="#portfolio">Portfolio</a>
        <a className="nav-link text-light" href="#contact">Contact</a>
     
          </div>
      )}
      <div>
      {/* <li className="nav-item dropdown  list-unstyled ">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
      <FontAwesomeIcon icon={faUser} className="btn btn-outline-dark text-light border-light"/>
                  </a>
                  <ul className="dropdown-menu  border-dark p-1 text-decoration-none">
                  <li>
                      <Link to="/admin/dashboard" className="text-decoration-none">
                    <a className="dropdown-item" href="#">
                      <b className=" text-danger ">Dashboard</b>
                    </a>
                      </Link>
                  </li>
                  <li>
                      <Link to="/mi-cuenta" className="text-decoration-none">
                    <a className="dropdown-item" href="#">
                      <b className=" text-dark ">Cuenta</b>
                    </a>
                      </Link>
                  </li>
                  </ul>
                  </li> */}

      </div>
      {/* <Link to="/iniciar-sesion">
           <button className="btn btn-outline-light mx-2 ">Acceso clientes</button>
      </Link> */}
        {translate === false ? (<Link to="/english" onClick={() => setTranslate(true)}>
        <a className=" text-light " ><img src={eeuuflag} alt="Bandera Estados unidos" className="flagUnitedStates"/></a>
        </Link>)  : (<Link to="/" onClick={() => setTranslate(false)}>
        <a className=" text-light " ><img src={argflag} alt="Bandera Argentina" className="flagUnitedStates"/></a>
        </Link>)
        
        }
        

     
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar
