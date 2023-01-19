import React from "react";
import landingpageplan from "../assets/landingpageplan.png";
import sitioweb from "../assets/sitioweb.png";
export const Plans = () => {
  return (
    <>
      <section className="bg-light p-5 text-light" id="planes">
        <div>
          <h2
            className="text-center text-dark mb-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Planes <span className="titles">Basicos</span>
          </h2>
          <div className="row" data-aos-duration="1000">
            <div
              className="bg-light shadow-lg mx-5 pb-3 cardcito cardPlan mt-2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="d-flex justify-content-end">
                <span class="badge bg-info">RECOMENDADO</span>
              </div>
              <div className="bg-light py-2 ">
                <img
                  src={landingpageplan}
                  alt="landing page"
                  className="w-100"
                />
                <h4 className="text-dark text-center">Landing Page</h4>
                <p className="text-secondary text-center">
                  Sitio web simple estatico, de una sección ideal para atraer
                  potenciales clientes y dar a conocer tus servicios
                </p>
                <p className="titles text-center mt-4">
                  <b>para comenzar a crecer</b>
                </p>

                <p className="text-center text-dark">ARS$</p>
                <div className="d-flex justify-content-center">
                  <span className="text-center titles descuentoPlans">
                    <del>$28.000</del>
                  </span>
                  <span className="text-center titles precioOficialPlans">
                    $25.000
                  </span>
                </div>

                <p className="text-center text-dark mt-5">CLP$</p>
                <div className="d-flex justify-content-center">
                  <span className="text-center titles descuentoPlans">
                    <del>$123.000</del>
                  </span>
                  <span className="text-center titles precioOficialPlans">
                    $120.000
                  </span>
                </div>
                <hr className="text-dark" />
              </div>
              <div className="text-dark">
                <ul className="text-center py-5">
                  <li className="">
                    {" "}
                    <span className="titles">✔</span> Certificado SSL{" "}
                  </li>
                  <li className="">
                    {" "}
                    <span className="titles">✔</span> Soporte 24hs{" "}
                  </li>
                  <li className="">
                    {" "}
                    <span className="titles">✔</span> Dominio 1 año Gratis{" "}
                  </li>
                  <li className="">
                    {" "}
                    <span className="titles">✔</span> Hosting 1 año Gratis{" "}
                  </li>
                  <li className="">
                    {" "}
                    <span className="titles">✔</span> Link a Whatsapp{" "}
                  </li>
                  <li className="">
                    <span className="titles">✔</span> Link a redes sociales{" "}
                  </li>
                  <li className="">
                    <span className="titles">✔</span> Google Maps{" "}
                  </li>
                </ul>
              </div>

              <a href="#contacto" className="text-decoration-none text-light">
                <button className=" btn btn-primary  mx-5 w-75">
                  Contactar{" "}
                </button>
              </a>
            </div>

            <div
              className="bg-light shadow-lg py-5 cardPlan cardcito mt-2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src={sitioweb} alt="landing page" className="w-100" />
              <h4 className="text-dark text-center">Sitio Web Basico</h4>

              <p className="text-secondary text-center">
                Sitio web para pequeñas empresas, con 4 secciones ideal para
                añadir más información sobre tus productos y/o servicios
              </p>
              <p className="titles text-center mt-4">
                <b>para impulsar tus ventas</b>
              </p>
              <p className="text-center text-dark">ARS$</p>
              <div className="d-flex justify-content-center">
                <span className="text-center titles descuentoPlans">
                  <del>$43.000</del>
                </span>
                <span className="text-center titles precioOficialPlans">
                  $40.000
                </span>
              </div>
              <p className="text-center text-dark mt-5">CLP$</p>
              <div className="d-flex justify-content-center">
                <span className="text-center titles descuentoPlans">
                  <del>$183.000</del>
                </span>
                <span className="text-center titles precioOficialPlans">
                  $180.000
                </span>
              </div>

              <hr className="text-dark" />
              <div className="text-dark">
                <ul className="text-center mt-5">
                  <li>
                    <span className="titles">✔</span> Certificado SSL{" "}
                  </li>
                  <li className="">
                    {" "}
                    <span className="titles">✔</span> Soporte 24hs{" "}
                  </li>
                  <li>
                    <span className="titles">✔</span> Dominio 1 año Gratis{" "}
                  </li>
                  <li>
                    <span className="titles">✔</span> Hosting 1 año Gratis{" "}
                  </li>
                  <li>
                    <span className="titles">✔</span> Link a Whatsapp{" "}
                  </li>
                  <li>
                    <span className="titles">✔</span> Link a redes sociales{" "}
                  </li>
                  <li className="">
                    <span className="titles">✔</span> Google Maps{" "}
                  </li>
                  <li>
                    <span className="titles">✔</span> 4 Secciones{" "}
                  </li>

                  <li>
                    <span className="titles">✔</span> Capacidad de 20 imagenes{" "}
                  </li>
                </ul>
              </div>
             
              <a href="#contacto" className="text-decoration-none text-light">
                <button className=" btn btn-primary  mx-5 w-75">
                  Contactar{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
