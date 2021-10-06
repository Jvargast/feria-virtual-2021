import React, { useState, ChangeEvent } from 'react'
import { onPassword, onPasswordChange } from '../components/Auth.api';
import { useHistory } from 'react-router';

interface Password {
    password: string,
    repeatPassword: string,
}


export default function ResetPassword() {
    const history = useHistory();


    const [showPost, setShow] = useState(false);
    const toggleHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setShow(!showPost)
    }


    const [{ password, newPassword }, setNewpass] = useState({
        password: '',
        newPassword: ''
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await onPasswordChange({
                password, 
                newPassword
            });
            history.push('/homepage');
        } catch (error) {
            
        }

    }
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
                                            <h2 className="logo-d septimo">Cambiar contraseña</h2>

                                        </div>
                                        <form className="form" id="loginForm" method="POST">
                                            <div className="primero segundo tercero cuarto quinto">

                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <label className="label-user inputd">
                                                            <span className="user-input">Contraseña</span>
                                                            <input aria-label="Contraseña" aria-required="true"
                                                                autoCapitalize="off" autoCorrect="off" name="password"
                                                                type={showPost ? 'text' : 'password'} className="input first second focus-visible" value={password} onChange={(event) => setNewpass({
                                                                    password: event.target.value,
                                                                    newPassword
                                                                })} />
                                                        </label>
                                                        <div className="fix">
                                                            <div className="primero segundo tercero cuarto sexto">
                                                                <button className="btn btn-show btn-btn"
                                                                    type="button" onClick={toggleHandler}>{showPost ? 'Ocultar' : 'Mostrar'}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="first-layer">
                                                    <div className="user-container">
                                                        <label className="label-user inputd">
                                                            <span className="user-input"> Repetir contraseña</span>
                                                            <input aria-label="Repita contraseña" aria-required="true"
                                                                autoCapitalize="off" autoCorrect="off" name="password"
                                                                type={showPost ? 'text' : 'password'} className="input first second focus-visible" value={newPassword} onChange={(e) => setNewpass({
                                                                    password,
                                                                    newPassword: e.target.value
                                                                })} />
                                                        </label>
                                                        <div className="fix">
                                                            <div className="primero segundo tercero cuarto sexto">
                                                                <button className="btn btn-show btn-btn"
                                                                    type="button" onClick={toggleHandler}>{showPost ? 'Ocultar' : 'Mostrar'}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="primero segundo tercero cuarto septimo octavo noveno decimo">
                                                    <button className="btn btn-init btn-sub" type="submit" onClick={handleSubmit}>
                                                        <div className="primero segundo tercero cuarto">Confirmar</div>
                                                    </button>

                                                </div>
                                                <div></div>
                                            </div>



                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>

                </main>





            </section>
        </div>
    )
}
