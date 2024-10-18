import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';
export const EnglishContact = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID, 
            import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_EMAIL_USER_ID
        )
        .then((result) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The email has been sent successfully!',
                color: '#fff',
                background: '#191a19',
                showConfirmButton: false,
                timer: 1500
            });

            setNombre('')
            setEmail('')
            setMensaje('')
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <>
            <h2 className="text-light text-center textServicios mt-5 pt-5" id="contact">CONTACT US</h2>
            <div className="d-flex justify-content-around ">
                <hr className="p-1 w-25 rounded text-danger bg-danger" />
                <hr className="p-1 w-25 rounded text-danger bg-danger" />
            </div>
            <section className="d-flex justify-content-center container">
                <div>
                    <form onSubmit={sendEmail}>
                        <p className="text-light text-center">Send your query, we are here to help you.</p>
                        <div className="text-light">
                            <p>Name:</p>
                            <input className="w-100 borderInputs bg-dark p-3 text-light" type="text" value={nombre} name="name" placeholder="Name" onChange={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className="text-light mt-3">
                            <p>Email:</p>
                            <input className="w-100 borderInputs bg-dark p-3 text-light" type="email" required value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="text-light mt-3">
                            <p>Your message:</p>
                            <textarea className="w-100 borderInputs bg-dark p-3 text-light" rows="5" cols="50" value={mensaje} name="message" placeholder="Your message..." onChange={(e) => setMensaje(e.target.value)} required />
                        </div>
                        <button className="btn btn-success text-light w-100 p-2" type="submit"> Send <i class="fi fi-tr-paper-plane-launch"></i></button>
                    </form>
                </div>
            </section>
        </>
    )
}
