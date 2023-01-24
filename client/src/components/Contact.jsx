import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
export const Contact = () => {
    
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const data = {
                nombre,
                email,
                mensaje
            }
            const response = await axios.post("http://localhost:5000/api/sendemail", data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El email fue enviado con exito!',
                showConfirmButton: false,
                timer: 1500
              })
              setNombre('')
              setEmail('')
              setMensaje('')
        }catch(err){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops... intenta más tarde.',
                showConfirmButton: false,
                timer: 1500
              })
        }

    
    }
    return (
        <>
            <section className="bg-light p-5 wrapper2 d-flex justify-content-center" id="contacto">
                <div>
                    <form className="w-100" onSubmit={handleSubmit}>

                        <h2 className="titles text-center">Contactanos</h2>
                        <p className="text-light text-center">Envía tu consulta, estamos para ayudarte.</p>
                        <div className="text-light">
                            <p>Nombre:</p>
                            <input className="w-100 borderInputs bg-dark p-2 text-light" type="name" value={nombre} onChange={ (e) => setNombre(e.target.value)} />
                        </div>
                        <div className="text-light mt-3">
                            <p>Email:</p>
                            <input className="w-100 borderInputs bg-dark p-2 text-light" type="email"  required value={email} onChange={ (e) => setEmail(e.target.value)}  />
                        </div>
                        <div className="text-light mt-3">
                            <p>Tu mensaje:</p>
                            <textarea type="text" className="w-100 borderInputs bg-dark p-2 text-light" rows="5" cols="50" value={mensaje} onChange={ (e) => setMensaje(e.target.value)} />
                        </div>
                        <button className="btn btn-primary text-light w-100" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}
