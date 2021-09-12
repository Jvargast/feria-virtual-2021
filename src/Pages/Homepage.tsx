import { render } from '@testing-library/react'
import React, { Component, useState } from 'react'

export default function Homepage() {
    const [{username,password}, setCredentials] = useState({
        username: '',
        password: ''
    })
    
        return (
            <div>
                <section>
                    <main className="main-main" role="main">
                        <article className="login-form">
                            <div className="form-container">
                                <div className="head-form">
                                    <div className="container-full">
                                        <img src="./assets/images/recursos-didaxia/Lienzo bandera.png" alt="Didaxia Logo" className="didaxia-lienzo" />
                                        <div className="container-form">
                                            <h1 className="logo-d">DIDAXIA LOGO</h1>
                                            <form className="form" id="loginForm" method="POST">
                                                <div className="primero segundo tercero cuarto quinto">
                                                    <div className="first-layer">
                                                        <div className="user-container">
                                                            <label className="label-user inputd">
                                                                <span className="user-input">Usuario o correo electrónico</span>
                                                                <input aria-label="Usuario o correo electrónico"
                                                                    aria-required="true" autoCapitalize="off" autoCorrect="off"
                                                                    type="text"
                                                                    className="input first second focus-visible" value={username} onChange={(event)=>setCredentials({
                                                                        username: event.target.value,
                                                                        password
                                                                    })}  />
                                                            </label>
                                                            <div className="fix"></div>
                                                        </div>
                                                    </div>
                                                    <div className="first-layer">
                                                        <div className="user-container">
                                                            <label className="label-user inputd">
                                                                <span className="user-input">Contraseña</span>
                                                                <input aria-label="Contraseña" aria-required="true"
                                                                    autoCapitalize="off" autoCorrect="off" name="password"
                                                                    type="password" className="input first second focus-visible" value={password} onChange={(event)=>setCredentials({
                                                                        username,
                                                                        password: event.target.value
                                                                    })}/>
                                                            </label>
                                                            <div className="fix">
                                                                <div className="primero segundo tercero cuarto sexto">
                                                                    <button className="btn btn-show btn-btn"
                                                                        type="button">Mostrar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="primero segundo tercero cuarto septimo octavo noveno decimo">
                                                        <button className="btn btn-init btn-sub" type="submit">
                                                            <div className="primero segundo tercero cuarto">Iniciar Sesión</div>
                                                        </button>
                                                    </div>
                                                    <div></div>
                                                </div>

                                                <a className="reset-pass" href="/accounts/passwor/reset">¿No recuerdas la
                                                    contraseña?</a>

                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div className="head-form">
                                    <div className="not account not-not account-set urus">
                                        <p className="no-account">¿No tienes cuenta?
                                            <a href="/accounts/signup" >
                                                <span className="not-account  account register regreg noregis">Regístrate</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </article>

                    </main>





                </section>
                <nav className="logo-container">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-whatsapp-square"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>




                </nav>
                <footer>
                    <div className="primero segundo tercero cuarto quinto">
                        <div className="primero segundo ">
                            <div className="pie pag">Español</div>
                            <div>
                                <div className="year">
                                    © 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                
            </div>
        );
    }

