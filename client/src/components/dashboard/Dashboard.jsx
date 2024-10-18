import React from 'react'
import {Link} from 'react-router-dom';
export const Dashboard = () => {
    return (
        <>
            <section className="container mt-5 p-5">
            <div>
                <h3 className="text-light text-center mt-5">Panel de control</h3>
                <hr className="text-danger" /> 
            </div>
            <section className="row">
                <div className="col-sm-12 col-md-4 border-secondary">
                    <div>
                        <Link to="/admin/clientes" className="text-decoration-none">
                        <button className="btn btn-outline-dark border-danger w-100 mb-3 text-light">Clientes</button>
                        </Link>
                        <Link to="/admin/servicios">
                        <button className="btn btn-outline-dark border-danger w-100 mb-3 text-light">Servicios</button>
                        </Link>
                        <button className="btn btn-outline-dark border-danger w-100 mb-3 text-light">Pagos</button>
                      
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="d-flex justify-content-between">

                    <h5>Pagos</h5>
                    <h5>Pagos</h5>
                    <h5>Pagos</h5>
                    <h5>Pagos</h5>
                    </div>
                </div>
            </section>
            </section>
        </>
    )
}
