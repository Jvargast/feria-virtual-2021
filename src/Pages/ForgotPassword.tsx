import React, { Component, useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { onPassword } from '../components/Auth.api';

type FormElement = React.FormEvent<HTMLFormElement>;

interface EmailValues {
    email: string,
}
const initialValues:EmailValues = {
    email: '',
}

export default function ForgotPassword() {

    const [emailValues, setEmailValues] = useState(initialValues);


    const handleInput = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = event.target;
        setEmailValues({
            ...emailValues,
            [name]: value
        })
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(emailValues);
        onPassword(emailValues);

    }

    //REVISAR ASUNTO CONTRASEÑA Y CAMBIARLO A CLASE, USO DE NODEMAILER
    //const [email, setEmail] = useState<string>('');

    /* const handleSubmit=async(e:FormElement) => {
        e.preventDefault();
        try {
            const response = await onPassword({
                email
            });

        } catch(e: any) {
            return e;
        }
        
    } */

    return (
        <div>
            <section>
                <main className="main-main" role="main">
                    <article className="login-form">
                        <div className="form-container">
                            <div className="head-form">
                                <div className="container-full">
                                    <img src="./assets/images/recursos-didaxia/Lienzo bandera.png" alt="Didaxia Logo" className="didaxia-lienzo" />
                                    <div className="container-formb">
                                        <h1 className="logo-d">DIDAXIA LOGO</h1>
                                        <div className="primero segundo tercero cuarto quinto">
                                            <h2 className="logo-d septimo">¿Problemas para entrar?</h2>
                                            <p className="logo-d octavob ">Introduce tu correo electrónico y te enviaremos un enlace para que vuelvas a entrar en tu cuenta.</p>
                                        </div>
                                        <form className="form">
                                            <div className="primero segundo tercero cuarto">
                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <label className="label-user inputd">
                                                            <span className="user-input">Correo electrónico</span>
                                                            <input
                                                                onChange={handleInput}
                                                                value={emailValues.email}
                                                                aria-required="true" autoCapitalize="off" autoCorrect="off"
                                                                type="text"
                                                                className="input first second focus-visible" />
                                                        </label>
                                                        <div className="fix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="primero segundo tercero cuarto septimo octavoa decimo">
                                                <button className="btn-suba" type="submit" >
                                                    <div className="primero segundo tercero cuarto">Enviar enlace</div>
                                                </button>
                                            </div>
                                            <div className="primero segundo tercero cuarto">
                                                <Link to="login" className="btn-subb" type="submit">
                                                    <div className="primero segundo tercero cuarto">Volver</div>
                                                </Link>
                                            </div>


                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>

                </main>





            </section>
            <nav className="logo-container">

            </nav>

            {/* <Footer /> */}
        </div>
    );
}