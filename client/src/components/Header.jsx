import React from "react";
export const Header = () => {
  return (
    <>
      <section className="wrapper  m-auto w-100">
        <header data-aos="fade-right" data-aos-duration="3000" className="w-100" >
          <h2 className="titulo effect text-center mb-3">
            Digitalizamos tu comercio <br />al menor costo.
          </h2>
          <a className="d-flex justify-content-center headerButton text-decoration-none text-light mt-5" href="#contacto">
            <button className="headerButton btn btn-primary">
              ¡Hablemos!
            </button>
          </a>
        </header>
      </section>
      
    </>
  );
};
