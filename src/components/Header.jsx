import React from "react";
export const Header = () => {
  return (
    <>
      <section className="wrapper ">
        <header data-aos="fade-right" data-aos-duration="3000" >
          <h1 className="titulo effect text-center  ">
            Digitalizamos tu comercio
          </h1>
          <a className="d-flex justify-content-center headerButton text-decoration-none text-light mt-">
            <button className="btn btn-outline-warning headerButton text-light">
              Hablemos
            </button>
          </a>
        </header>
      </section>
      
    </>
  );
};
