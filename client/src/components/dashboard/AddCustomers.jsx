import React from "react";
import { Link } from "react-router-dom";
export const AddCustomers = () => {
  return (
    <>
      <section className="mt-5 p-5 text-light container">
        <div className="mb-4">
          <Link to="/admin/clientes" className="text-decoration-none">
            <button className="btn btn-outline-light">Volver atras</button>
          </Link>
        </div>
        <div>
          <h4 className="text-center">Agregar Cliente</h4>
          <hr className="text-danger" />
        </div>
        <div className="">
          <form className="">
            <div>
              <label className="mb-2">Email</label>
              <input
                className="form-control bg-dark text-light w-100 mb-3"
                type="email"
                placeholder="example@example.com"
              />
            </div>

            <div>
              <label className="mb-2">Contraseña</label>
              <input
                className="form-control bg-dark text-light w-100  mb-3"
                type="password"
                placeholder="******"
              />
            </div>

            <div>
              <label className="mb-2">Repetir Contraseña</label>
              <input
                className="form-control bg-dark text-light w-100  mb-3"
                type="password"
                placeholder="******"
              />
            </div>

            <div>
              <label className="mb-2">Host</label>
              <input
                className="form-control bg-dark text-light w-100  mb-3"
                type="email"
                placeholder="web.com.ar"
              />
            </div>

            <div>
              <label className="mb-2">Nombre</label>
              <input
                className="form-control bg-dark text-light w-100  mb-3"
                type="email"
                placeholder="Nombre"
              />
            </div>

            <div>
              <label className="mb-2">Servicio</label>
              <input
                className="form-control bg-dark text-light w-100  mb-3"
                type="email"
                placeholder="Hosting web, mantenimiento.."
              />
            </div>

            <button className="btn btn-outline-dark border-success w-100 text-light">
              Registrar{" "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
