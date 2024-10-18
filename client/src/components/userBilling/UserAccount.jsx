import React from "react";

export const UserAccount = () => {
  return (
    <>
      <section className="bg-dark p-5 mt-5">
        <div className="text-light mt-3 text-center">
          <h2 className="text-light">Tu Cuenta</h2>
        </div>
      </section>
      <section className="container mt-5">
        <div>
          <h5 className="text-light">Servicios</h5>
          <hr className="text-light" />
          <table class="table table-dark table-hover">
            <thead>
              <th scope="col">#ID</th>
              <th scope="col">Servicios</th>
              <th scope="col">Host</th>
              <th scope="col">Acciones</th>
            </thead>
            <tbody>
              <tr>
                <td scope="row">#12KFCX2Z6</td>
                <td scope="row">Hosting Plan Mensual + Mantenimiento Web</td>

                <td scope="row">zuka3d.cl</td>
                <td scope="row">
                  <button className="btn btn-outline-dark text-light border-light mx-2">
                    Panel
                  </button>
                  <button className="btn btn-outline-dark text-light border-light">
                    Facturación
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
