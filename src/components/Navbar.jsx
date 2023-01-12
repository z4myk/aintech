import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light shadow fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">AINTECH</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-5 ms-auto">
        <a class="nav-link"  href="#nosotros">Sobre nosotros</a>
        <a class="nav-link" href="#">Servicios</a>
        <a class="nav-link" href="#">Planes</a>
        <a class="nav-link" href="#">Contacto</a>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
