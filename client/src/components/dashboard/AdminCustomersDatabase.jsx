import React from 'react'
import {Link} from 'react-router-dom'
export const AdminCustomersDatabase = () => {
    return (
        <>
        <section className="container p-5 mt-5">
            <div>
                <Link to="/admin/dashboard" className="text-decoration-none"> 
        <button className="btn btn-outline-light">Volver atras</button>
                </Link>
            </div>
                <div className="mt-5">
                    <Link to="/admin/agregar-cliente" className="text-decoration-none w-100 d-flex justify-content-center ">
                    <button className="btn btn-outline-dark text-light border-success w-50">Registrar Cliente</button>
                    </Link>
                </div>

        <div className="mt-5">
            <h4 className="text-light">Clientes</h4>
            <hr  className="text-danger" />
            <table class="table table-dark table-hover">
            <thead>
              <th scope="col">#ID</th>
              <th scope="col">Email</th>
              <th scope="col">Host</th>
              <th scope="col">Acciones</th>
            </thead>
            <tbody>
              <tr>
                <td scope="row">#12KFCX2Z6</td>
                <td scope="row">tuquituqui@gmail.com</td>

                <td scope="row">zuka3d.cl</td>
                <td scope="row">
                  <button className="btn btn-outline-dark text-light border-light mx-2">
                    Panel
                  </button>
                  <button className="btn btn-outline-dark text-light border-light mx-2">
                    Detalle
                  </button>
                  <button className="btn btn-outline-dark text-light border-light mx-2">
                    Facturación
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </section>
        </>
    )
}
