import React from "react";
import tarjetaHeader from "../assets/tarjetaHeader.png";
export const About = () => {
  return (
    <>
      <section className="mb-5 pt-5 pb-5 " id="nosotros"
        data-aos="fade-up"
        
        data-aos-duration="1500">
        <div className="row"
        >
          <div className="col-sm-12 col-md-8">
          <div className="mx-5 mt-2 ">         
        </div>
            <img src={tarjetaHeader} alt="Tarjeta diseño" className="w-100" />
          </div>
          <div className="col-sm-12 col-md-4 mt-5 pt-5">
            <div className="mx-5 mt-5 text-light">
              <hr className="w-75 text-light" />
              <article>
                  <p className="textColor">
                    ¡Bienvenidos a <b>Aintech Agency!</b> <br />
                    <span className="text-light">Somos más que una agencia, somos tus aliados creativos para llevar tu marca al siguiente nivel.</span></p>
                    
                    <p><span className="bgColorAbout">¿Listos para destacar en el mercado?</span><br />
                    Ofrecemos servicios de branding y diseño de <i><b>primera calidad</b></i> para que tu negocio brille como <span className="textColor">nunca antes.</span>
                  </p>
                  <hr className="w-75 text-light" />
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
