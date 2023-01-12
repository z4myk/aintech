import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAlt, faMagnifyingGlass, faMobile, faMobileAlt, faTowerCell, faUserShield } from '@fortawesome/free-solid-svg-icons'
export const About = () => {
    return (
        <>
            <section className="container"  data-aos="zoom-in"  data-aos-duration="2000">
                <div>
                    <h2 className="text-center mt-5 mb-5">Sobre <span className="text-warning" id="nosotros">Nosotros</span></h2>
                </div>
                <div>
                    <div className="d-flex justify-content-around text-center mb-5 shadow-lg p-5 ">
                        <div className="mx-2">
                           <FontAwesomeIcon icon={faMobileAlt} className="fa-2x text-warning" />
                            <h5 className="mt-2 mb-3">Adaptable a cualquier dispositivo</h5>
                            <p>Tu web estará optimizada para una mejor experiencia de usuario.</p>
                        </div>
                        <div className="mx-2" >
                        <FontAwesomeIcon icon={faHandshakeAlt} className="fa-2x text-warning" />
                        <h5 className="mt-2 mb-3">Te escuchamos</h5>
                        <p>Analizamos cada idea para llegar a la solución en el menor tiempo posible.</p>
                        </div>
                        <div className="mx-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-2x text-warning"  />
                        <h5 className="mt-2 mb-3">SEO</h5>
                        <p>Tendrás presencia en Google y los buscadores más utilizados.</p>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
}
