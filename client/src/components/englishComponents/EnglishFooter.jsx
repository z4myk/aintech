import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoat from '../../assets/logoat.png'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export const EnglishFooter = () => {
    return (
        <footer className="py-5  text-center text-light" >
            <h2 className="brandingFooter">BRANDING</h2>
            <h2 className="brandingFooterResponsive">BRAN<br/>DING</h2>
            <marquee className="">
            <div className="d-flex justify-center gap-5 container mb-3 text-secondary mt-5 mb-5">
                <span className="marqueeHover"><i>DESIGNING</i></span>
                <span className="marqueeHover"><i>DEVELOPMENT</i></span>
                <span className="marqueeHover"><i>DIGITAL MARKETING</i></span>
                <span className="marqueeHover"><i>BRANDING</i></span>
                <span className="marqueeHover"><i>HOSTING WEB</i></span>
               
            </div>
            </marquee>
            <div className="container ">
            <img src={logoat} alt="Aintech LOGO" className="logoAintech" />
            <h5><b>Contact Us</b></h5>
            <span className="">E-mail: agencia@aintech.com.ar</span> <br />
            <div className="d-flex justify-content-center align-items-center gap-5 mt-2 mb-2 ">
                <a href="https://www.facebook.com/Aintechagency" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x" className="bgIconsFooter "/></a>
                <a href="https://www.instagram.com/aintech.agency/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x" className="bgIconsFooter" /></a>
                <FontAwesomeIcon icon={faTwitter} size="3x" className="bgIconsFooter" />
                <a href="https://www.linkedin.com/company/aintechagency/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" className="bgIconsFooter" /></a>
            </div>
            <span className="small">© 2022 - 2024 Aintech Agency</span>


            </div>
        </footer>
    )
}
