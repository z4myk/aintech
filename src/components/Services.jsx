import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import landingpage from '../assets/landingpage.png'
import cartadigital from '../assets/cartadigital.png'
import system from '../assets/system.png'
import desarrolloamedida from '../assets/desarrolloamedida.png'
import eccomerce from '../assets/eccomerce.png'
import { faCode, faGear, faPager, faSatellite, faStoreAlt} from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
    return (
        <>
            <section className="pt-2" id='servicios'  >

                <div className=' mb-5 mt-5' data-aos="zoom-in"  data-aos-duration="2000">
                <h2 className='text-center mb-2'>Nuestros <span className='titles'>Servicios</span></h2>
                <hr className='hr-titles mb-5' />
                    <div className='row text-center'>
                        <div className='col-md-7'>
                            <div className='row mb-5'>
                                <div className='col-md-5 mx-5 mb-3 mt-2 shadow border '>
                                    {/* <FontAwesomeIcon icon={faPager} className="fa-2x titles mt-3" /> */}
                                    <img src={landingpage} alt="Landing Page" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Landing Page</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">El objetivo principal es mantener una marcada presencia en Internet y poder ser encontrado por los buscadores. Tus potenciales clientes podrán conocerte, explorar tus productos/servicios y contactarte.</p>
                                </div>

                                

                                <div className='col-md-5 mt-2 mb-3 shadow border'>
                                    {/* <FontAwesomeIcon icon={faGear} className="fa-2x titles mt-3" /> */}
                                    <img src={system} alt="Sistema de gestion" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Sistemas de gestión</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Creamos sistemas de gestión para adaptar a las nesecidades de tu empresa.</p>
                                </div>

                                <div className='col-md-5 mx-5 mb-3 mt-2 shadow border'>
                                    {/* <FontAwesomeIcon icon={faCode} className="fa-2x titles mt-3" /> */}
                                    <img src={desarrolloamedida} alt="Desarrollo a medida" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Desarrollo a medida</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Desarrollamos software de alto nivel y de la mejor manera a las necesidades de cada cliente.</p>
                                </div>

                                <div className='col-md-5 mt-2 mb-3 shadow border'>
                                    {/* <FontAwesomeIcon icon={faStoreAlt} className="fa-2x titles mt-3" /> */}
                                    <img src={eccomerce} alt="Tienda digital" className="w-75 mt-2"/>
                                    <h5 className='title-services'>Tienda Online</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Creamos tu tienda digital </p>
                                </div>

                                <div className='col-md-5 mx-5 mb-3 mt-2 shadow border '>
                                    {/* <FontAwesomeIcon icon={faPager} className="fa-2x titles mt-3" /> */}
                                    <img src={cartadigital} alt="Carta digital" className="w-100 mt-2"/>
                                    <h5 className='title-services'>Carta digital</h5>
                                    <hr className='hr-services' />
                                    <p className=" text-secondary">Chau papel! creamos tu carta digital + QR</p>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
