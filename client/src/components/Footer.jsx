import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import aintechlogo from '../assets/aintechlogo.png'
import { faEnvelope, faVoicemail } from '@fortawesome/free-solid-svg-icons'
export const Footer = () => {
    return (
        <footer className="bg-light py-5 mt-5 text-center">
            <div className="row ">
                <div className="col-md-4 col-sm-12">
                <h5 className="titles">Contacto:</h5>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className="titles" />
                        <span className="mx-2">aintechsoftware@gmail.com</span>

                    </li>
                </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h5 className="titles">navegación</h5>
                <ul>
                    <li><a href="#nosotros">Sobre nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#planes" >Planes</a></li>
                    <li><a  href="#contacto">Contacto</a></li>
                </ul>
                </div>

                <div className="col-md-4 col-sm-12">
                <h5 className="titles">Redes sociales</h5>
                <ul className="d-flex justify-content-center">
                    <li className="titles"><a target="_blank" href="https://www.instagram.com/aintech.dev/"><img src={instagram} alt="Logo Instagram" className="logoInstagram" /></a></li>
                  
                 <li  className="titles"><a target="_blank" href="https://www.facebook.com/Aintechsoftware"><img src={facebook} alt="Logo Instagram" className="logoFacebook mx-1" /></a></li>
                </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <p className="text-center mt-5 small">© Derechos de autor Aintech. Todos los derechos reservados 2023 <img src={aintechlogo} alt="Aintech LOGO" className="logoAintech" /></p>

            </div>
        </footer>
    )
}
