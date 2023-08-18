import React from 'react'
import aintechlogo from '../assets/aintechlogo.png'
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark text-light shadow fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand titles " href="#"><img src={aintechlogo} alt="Aintech LOGO" className="logoAintech" /><small>AINTECH</small></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-5 ms-auto">
        <a class="nav-link text-light"  href="#nosotros">Sobre nosotros</a>
        <a class="nav-link text-light" href="#servicios">Servicios</a>
        <a class="nav-link text-light" href="#planes">Planes</a>
        <a class="nav-link text-light" href="#contacto">Contacto</a>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
