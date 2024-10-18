import React from 'react'
import servicioImagen from '../../assets/servicioImagen.png'
import tabletServicios from '../../assets/tabletServicios.png';
import icono1 from '../../assets/icono1.png';
import icono2 from '../../assets/icono2.png';
import icono3 from '../../assets/icono3.png';
import icono4 from '../../assets/icono4.png';
import icono5 from '../../assets/icono5.png'
import icono6 from '../../assets/icono6.png'
import imagenServices from '../../assets/imagenServices.png'
export const EnglishServices = () => {
    return (
        <>
        <section className="contenedorHeader p-5 position-relative headerServicios "   id='servicios'  >
</section>
         <section className="container mt-5" data-aos="fade-down"
  data-aos-easing="linear"
  data-aos-duration="1500"
>
             <div className="">
         <h2 className="text-light textServicios  text-center ">SERVICES</h2>
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
                     <h4 className="textColor">UI/UX Web Design</h4>
                     <p className="parrafoServices container">We create a website for your business <br /> <b>ideal for adding information about <br/> your products and/or services.</b> <br /><i>+ Monthly Hosting</i></p>
                     

                     </div>
                 </div>
               
                 <div className="marginServicesBottom d-flex justify-content-around ">
                     
                 <img src={icono6} className="widthIcons" alt="icono1"/> 
                     <div className="text-center">
                         <h4 className="textColor">Esports/Streaming</h4>
                         <p className="parrafoServices container">Everything designable for your <br /> personal streaming space or your <br /> E-sports agency, whether overlays etc...</p>

                     </div>
                 </div>
                 <div className="marginServices d-flex justify-content-around text-center" >
                 <img src={icono5} className="widthIcons  w-25" alt="icono2"/> 
                 <div>
                 <h4 className="textColor">Social networks</h4>
                 <p className="parrafoServices container ">Designs adapted to all networks, <br/> according to the needs of your brand, <br /> Facebook, Twitch, Instagram and more!</p>
                     </div>    
                     
                 </div>
             </div>
             <div className="text-center">
            
             </div>
             <div className="d-flex justify-content-between text-light serviceResponsive pb-5 mt-5 mb-5">
             <div className=" marginServicesBottom d-flex justify-content-around">
                     <img src={icono2} className="widthIcons" alt="icono3"/> 
                     <div className="text-center">
                     <h4 className="textColor">Branding - Identity</h4>
                     <p className="parrafoServices container">Everything related to your brand; <br /> Letterheads, flyers, banners, personal <br /> cards, posters, brochures, etc...</p>

                     </div>
                 </div>
               
                 <div className="marginServices d-flex justify-content-around">
                     
                 <img src={icono3} className="widthIcons" alt="icono4"/> 
                     <div className="text-center">
                         <h4 className="textColor">Editorial Design</h4>
                         <p className="parrafoServices container">We offer you the design, whether it is a magazine <br /> or a book, we can advise you on the <br /> production of the editorial piece.</p>

                     </div>
                 </div>
                 <div className="marginServicesBottom d-flex justify-content-around text-center" >
                 <img src={icono4} className="widthIcons" alt="icono5"/> 
                 <div>
                 <h4 className="textColor">E-Commerce / Store</h4>
                 <p className="parrafoServices container ">We create your digital store with <br /> payment gateways <b>(Mercado Pago)</b> or <br /> <b>deposit systems <br /> / bank transfer</b>.</p>
                     </div>    
                     
                 </div>
             </div>
             </div>
         </section>
     </>
    )
}
