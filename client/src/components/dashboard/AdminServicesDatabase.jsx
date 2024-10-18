import React from 'react'
import {Link} from 'react-router-dom'
export const AdminServicesDatabase = () => {
    return (
        <>
          
           <section className="container  text-light p-5 mt-5">
           <div className=" mb-5">
                <Link to="/admin/dashboard" className="text-decoration-none"> 
        <button className="btn btn-outline-light">Volver atras</button>
                </Link>
            </div>
               <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <h4>Agregar servicio</h4>
                        <hr className="text-danger"/> 
                        <div>
                            <form>
                            <input className="form-control w-100 bg-dark text-light" />
                            <button className="btn btn-outline-dark text-light border-success w-100 mt-2">Agregar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <h4>Servicios actuales</h4>
                        <hr className="text-danger"/> 
                        <div>
                        <table class="table table-dark table-hover">
            <thead>
              <th scope="col">#ID</th>
              <th scope="col">Servicio</th>
              <th scope="col">Importe</th>
              <th scope="col">Acciones</th>
            </thead>
            <tbody>
              <tr>
                <td scope="row">#12KFCX2Z6</td>
                <td scope="row">Mantenimiento Web</td>
                <td scope="row">$5000</td>

                <td scope="row">
                  <button className="btn btn-warning text-light border-light mx-2">
                   Editar
                  </button>
                  <button className="btn btn-danger text-light border-light mx-2">
                    Borrar
                  </button>

                </td>
              </tr>
            </tbody>
          </table>
                        </div>
                    </div>
               </div>
           </section>
        </>
    )
}
