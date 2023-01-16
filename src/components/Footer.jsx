import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import { faEnvelope, faVoicemail } from '@fortawesome/free-solid-svg-icons'
export const Footer = () => {
    return (
        <footer className="bg-light py-5 mt-5 text-center">
            <div className="row container ">
                <div className="col-md-3 col-sm-12">
                <h5 className="titles">Contacto:</h5>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className="titles" />
                        <span className="mx-2">aintech@gmail.com</span>

                    </li>
                </ul>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h5 className="titles">navegación</h5>
                <ul>
                    <li><a href="#nosotros">Sobre nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#planes" >Planes</a></li>
                    <li><a  href="#contacto">Contacto</a></li>
                </ul>
                </div>

                <div className="col-md-3 col-sm-12">
                <h5 className="titles">Redes sociales</h5>
                <ul>
                    <li className="titles"><img src={instagram} alt="Logo Instagram" className="logoInstagram" />Instagram</li>
                  
                 <li  className="titles"><img src={facebook} alt="Logo Instagram" className="logoFacebook mx-1" />Facebook</li>
                </ul>
                </div>
            </div>
            <p className="text-center mt-5 small">© Derechos de autor Aintech. Todos los derechos reservados 2023</p>
        </footer>
    )
}
