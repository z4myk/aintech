import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import landingpage from '../assets/landingpage.png'
import cartadigital from '../assets/cartadigital.png'
import webhosting from '../assets/webhosting.png'
import system from '../assets/system.png'
import desarrolloamedida from '../assets/desarrolloamedida.png'
import eccomerce from '../assets/eccomerce.png'


export const Services = () => {
    return (
        <>
            <section className="pt-2 container" id='servicios'  >

                <div className=' mb-5 mt-5 container' data-aos="zoom-in"  data-aos-duration="1500">
                <h2 className='text-center mb-2'>Nuestros <span className='titles'>Servicios</span></h2>
                <hr className='hr-titles mb-5' />
                    <div className='row text-center'>
                        <div className='col-md-7 d-flex justify-content-between'>
                            <div className='row mb-5'>
                                <div className='col-md-5 mx-5 mb-3 mt-2 shadow border '>
                                    <img src={landingpage} alt="Landing Page" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Landing Page</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">El objetivo principal es mantener una marcada presencia en Internet y poder ser encontrado por los buscadores. Tus potenciales clientes podrán conocerte, explorar tus productos/servicios y contactarte.</p>
                                </div>

                                <div className='col-md-5 mt-2 mb-3 shadow border'>
                                    <img src={system} alt="Sistema de gestion" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Sistemas de gestión</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Creamos sistemas de gestión para adaptar a las nesecidades de tu empresa.</p>
                                </div>

                                <div className='col-md-5 mx-5 mb-3 mt-2 shadow border'>
                                    <img src={desarrolloamedida} alt="Desarrollo a medida" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Desarrollo a medida</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Desarrollamos software de alto nivel y de la mejor manera a las necesidades de cada cliente.</p>
                                </div>

                                <div className='col-md-5 mt-2 mb-3 shadow border'>
                                    <img src={eccomerce} alt="Tienda digital" className="w-75 mt-2"/>
                                    <h5 className='title-services'>Tienda Online</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Creamos tu tienda digital. </p>
                                </div>

                                <div className='col-md-5 mx-5 mb-3 mt-2 shadow border '>
                                    <img src={cartadigital} alt="Carta digital" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Carta digital</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Chau papel! creamos tu carta digital</p>
                                </div>

                                <div className='col-md-5  mb-3 mt-2 shadow border '>
                                    <img src={webhosting} alt="Carta digital" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Servicio Hosting Web Mensual</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">tu sitio web siempre estará disponible y en línea para que tus clientes puedan ver tus servicios o productos las 24 horas.</p>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
