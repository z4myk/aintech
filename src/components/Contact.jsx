import React from 'react'
import aintechlogo from '../assets/aintechlogo.png'
export const Contact = () => {
    return (
        <>
            <section className="bg-light p-5 wrapper2 d-flex justify-content-center" id="contacto">
                <div>
                    <form className=" w-100">

                        <h2 className="titles text-center">Contactanos</h2>
                        <p className="text-light text-center">Envia tu consulta, estamos para ayudarte.</p>
                        <div className="text-light">
                            <p>Nombre:</p>
                            <input className="w-100 borderInputs bg-dark p-2 text-light" type="name"  required/>
                        </div>
                        <div className="text-light mt-3">
                            <p>Email:</p>
                            <input className="w-100 borderInputs bg-dark p-2 text-light" type="email"  required />
                        </div>
                        <div className="text-light mt-3">
                            <p>Tu mensaje:</p>
                            <textarea type="text" className="w-100 borderInputs bg-dark p-2 text-light" rows="5" cols="50" />
                        </div>
                        <button className="btn btn-primary text-light w-100">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}
