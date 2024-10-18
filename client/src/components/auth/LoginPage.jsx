import React from 'react'
import logoat from '../../assets/logoat.png'
export const LoginPage = () => {
    return (
        <>
            <section className="mt-5 p-5 border-danger container text-light ">
                <h3 className="text-light text-center ">Acceso a clientes</h3>
                <hr className="text-danger" />
                <div className="text-center">
                <img src={logoat} className="logoLoginPage " />
                </div>
                <div className="">
                <form className="">

                    <div className="mb-4 mt-4">
                    <label className="mx-2 mb-1 form-label">Email <span className="text-danger">*</span></label>
                    <input className="form-control w-100 bg-dark text-light" type="email" placeholder="example@example.com"/>
                    </div>

                    <div className="">
                    <label className="mx-2 mb-1 form-label">Contraseña <span className="text-danger">*</span></label>
                    <input className="form-control w-100 bg-dark text-light" type="password"/>
                    </div>

                    <button className="btn btn-outline-dark text-light w-100 mt-4 border-success">Iniciar Sesión</button>
                </form>
                </div>
            </section>
        </>
    )
}
