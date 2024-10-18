import React from 'react'
import servicioImagen from '../assets/servicioImagen.png'
import tabletServicios from '../assets/tabletServicios.png';
import icono1 from '../assets/icono1.png';
import icono2 from '../assets/icono2.png';
import icono3 from '../assets/icono3.png';
import icono4 from '../assets/icono4.png';
import icono5 from '../assets/icono5.png'
import icono6 from '../assets/icono6.png'
import imagenServices from '../assets/imagenServices.png'

export const Services = () => {
    return (
        <>
           <section className="contenedorHeader p-5 position-relative headerServicios "   id='servicios'  >
</section>
            <section className="container mt-5" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
>
                <div className="">
            <h2 className="text-light textServicios  text-center ">SERVICIOS</h2>
            <div className="d-flex justify-content-around mb-5">
            <hr className="p-1 w-25 rounded text-danger bg-danger" />
            <hr className="p-1 w-25 rounded text-danger bg-danger" />
            </div>
                </div>
                <div className="borrarServiciosMobile">
               
                <div className="d-flex justify-content-between serviceResponsive text-light">
                <div className=" marginServices d-flex justify-content-around">
                        
                        <img src={icono1} className="widthIcons" alt="icono6"/> 
                       
                        <div className="text-center ">
                        <h4 className="textColor">Diseño Web UI/UX</h4>
                        <p className="parrafoServices container">Creamos un sitio web para tu negocio <br /> <b>ideal para añadir información sobre <br/>  tus productos y/o servicios.</b> <br /><i>+ Hosting Mensual</i></p>
                        

                        </div>
                    </div>
                  
                    <div className="marginServicesBottom d-flex justify-content-around ">
                        
                    <img src={icono6} className="widthIcons" alt="icono1"/> 
                        <div className="text-center">
                            <h4 className="textColor">Esports/Streaming</h4>
                            <p className="parrafoServices container">Todo lo diseñable para tu espacio <br /> personal de streaming o tu agencia de <br/> E-sports, ya sean overlays etc...</p>

                        </div>
                    </div>
                    <div className="marginServices d-flex justify-content-around text-center" >
                    <img src={icono5} className="widthIcons  w-25" alt="icono2"/> 
                    <div>
                    <h4 className="textColor">Redes Sociales</h4>
                    <p className="parrafoServices container ">Diseños adaptados a todas las redes, <br/> segun las necesidades de tu marca, <br /> Facebook, Twitch, Instagram y más!</p>
                        </div>    
                        
                    </div>
                </div>
                <div className="text-center">
               
                </div>
                <div className="d-flex justify-content-between text-light serviceResponsive pb-5 mt-5 mb-5">
                <div className=" marginServicesBottom d-flex justify-content-around">
                        <img src={icono2} className="widthIcons" alt="icono3"/> 
                        <div className="text-center">
                        <h4 className="textColor">Branding - Identidad</h4>
                        <p className="parrafoServices container">Todo relacionado con tu marca; <br /> Membretes, flyers, banners, tarjetas <br /> personales, carteleria, brochures etc...</p>

                        </div>
                    </div>
                  
                    <div className="marginServices d-flex justify-content-around">
                        
                    <img src={icono3} className="widthIcons" alt="icono4"/> 
                        <div className="text-center">
                            <h4 className="textColor">Diseño Editorial</h4>
                            <p className="parrafoServices container">Te ofrecemos el diseño ya sea revista <br /> o libro, te podemos aconsejar a la <br /> producción de la pieza editorial.</p>

                        </div>
                    </div>
                    <div className="marginServicesBottom d-flex justify-content-around text-center" >
                    <img src={icono4} className="widthIcons" alt="icono5"/> 
                    <div>
                    <h4 className="textColor">E-Commerce / Tienda</h4>
                    <p className="parrafoServices container ">Creamos tu tienda digital con <br/> pasarelas de pago <b>(Mercado Pago)</b> o <br /> <b>sistemas de deposito <br /> / transferencia bancaria</b>.</p>
                        </div>    
                        
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
