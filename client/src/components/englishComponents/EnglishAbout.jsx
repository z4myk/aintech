import React from 'react'
import tarjetaHeader from "../../assets/tarjetaHeader.png";
export const EnglishAbout = () => {
    return (
        <div>
            <section className="mb-5 pt-5 " 
        data-aos="fade-down"
        id="about"
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
                    ¡Welcome to <b>Aintech Agency!</b> <br />
                    <span className="text-light"> We are more than an agency; we are your creative allies to take your brand to the next level.</span></p>
                    
                    <p><span className="bgColorAbout">¿Ready to stand out in the market?</span><br />
                    We offer branding and design services of <i><b>first quality</b></i> so that your business shines like <span className="textColor">never before.</span>
                  </p>
                  <hr className="w-75 text-light" />
              </article>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
