import React from 'react'
import homeimagen from "../../assets/homeimagen.png";
import weare from '../../assets/weare.png'
export const EnglishHeader = () => {
    return (
        <div className="fixOVerflow mt-5">
             <section
      >
        <div className=" container text-light mt-5 headerMargin contenedorHeader pb-5 mb-5 overflow-hidden"
        data-aos="fade-up"
       
        data-aos-duration="1500">
    
        <img src={homeimagen} alt="imagen de fondo" className="imagenHeader" />
        
        <div className="row pt-3"  id="home">
          <div className="col-sm-12 col-md-8">
            <div className="contenedorImagenHeader imagenDiseño">
           <img src={weare} className="englishHeader " />
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mt-5 p-2">
            <div className="pHeader">
              <p className="mt-5">
                <b>
                After 5 years of service, we have decided to start our own agency, where we offer a graphic refresh to your brand identity.
                </b>
              
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="contenedorBotonHeader ">
      <div className="borderButtonHeader p-2 d-flex justify-content-between">
            <i className="text-light mt-2 mx-2">Start your project</i>{" "}
            <a href="#contact"><button className="btn btn-info mx-2"><b>Here</b></button></a>
            </div>
      </section>
        </div>
    )
}
