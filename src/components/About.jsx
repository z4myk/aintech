import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import devfocus from '../assets/devfocus.png'
import responsive from '../assets/responsive.png'
import seo from '../assets/seo.png'
export const About = () => {
    return (
        <>
            <section className="mb-5 pt-5 " id="nosotros" >
                <div data-aos="zoom-in"  data-aos-duration="2000" >
                    <h2 className="text-center mb-2">Sobre <span className="titles" >Nosotros</span></h2>
                    <hr className='hr-titles mb-5' />
                </div>
                <div data-aos="zoom-in"  data-aos-duration="2000" className="container">
                    <div className="d-flex justify-content-center text-center mb-5 shadow-lg p-5 cardsAbout-responsive ">
                        <div className="mx-2" >
                        <img src={devfocus} alt="developer" className="w-50"/>
                        <h5 className="mt-2 mb-3">Te escuchamos</h5>
                        <p  className=" text-secondary">Analizamos cada idea para llegar a la solución en el menor tiempo posible.</p>
                        </div>
                        <div className="mx-2 ">
                           <img src={responsive} alt="responsive" className="w-50"/>
                            <h5 className="mt-2 mb-3">Adaptable a cualquier dispositivo</h5>
                            <p className=" text-secondary container">Tu web estará optimizada para una mejor experiencia de usuario.</p>
                        </div>
                        <div className="mx-2">
                        <img src={seo} alt="SEO" className="w-50"/>
                        <h5 className="mt-2 mb-3">SEO</h5>
                        <p  className=" text-secondary">Tendrás presencia en Google y los buscadores más utilizados.</p>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
}
