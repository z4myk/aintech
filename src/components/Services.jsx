import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGear, faPager, faSatellite, faStoreAlt} from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
    return (
        <>
            <section>
                <h2 className='text-center mt-4'>Nuestros <span className='text-warning'>Servicios</span></h2>

                <div className=''>
                    <div className='row text-center '>
                        <div className='col-md-7'>
                            <div className='row mb-5'>
                                <div className='col-md-5 mx-2 mt-2 shadow-lg'>
                                    <FontAwesomeIcon icon={faPager} className="fa-2x text-warning mt-2" />
                                    <h5 className='title-services'>Landing Page</h5>
                                    <hr className='hr-services' />
                                    <p>El objetivo principal es mantener una marcada presencia en Internet y poder ser encontrado por los buscadores. Tus potenciales clientes podrán conocerte, explorar tus productos/servicios y contactarte.</p>
                                </div>

                                <div className='col-md-5 mt-2 shadow-lg'>
                                    <FontAwesomeIcon icon={faGear} className="fa-2x text-warning mt-2" />
                                    <h5 className='title-services'>Sistemas de gestión</h5>
                                    <hr className='hr-services' />
                                    <p>Creamos sistemas de gestión para adaptar a las nesecidades de tu empresa</p>
                                </div>

                                <div className='col-md-5 mx-2 mt-2 shadow-lg'>
                                    <FontAwesomeIcon icon={faCode} className="fa-2x text-warning mt-2" />
                                    <h5 className='title-services'>Desarrollo a medida</h5>
                                    <hr className='hr-services' />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, et blanditiis. Commodi unde animi quisquam, nemo sint cumque eveniet, aspernatur accusamus numquam voluptatibus voluptas odio debitis? Ipsum similique at consectetur!</p>
                                </div>

                                <div className='col-md-5 mt-2 shadow-lg'>
                                    <FontAwesomeIcon icon={faStoreAlt} className="fa-2x text-warning mt-2" />
                                    <h5 className='title-services'>Eccomerce</h5>
                                    <hr className='hr-services' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur assumenda dolores alias laudantium vel repellat, doloribus voluptatum veniam ex laboriosam eum, repudiandae incidunt, nisi maxime vero dolorum. Architecto, totam esse?</p>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
