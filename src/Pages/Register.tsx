import React, { ChangeEvent, useState } from 'react'

interface RegisterValues  {
    username: string,
    password: string,
    role: string
}

const initialValues: RegisterValues = {
    username: '',
    password: '',
    role: 'STUDENT'
}

export default function Register() {

    const [registerValues, setRegisterValues] = useState(initialValues);

    const handleInputChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = event.target;
        setRegisterValues({
            ...registerValues,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(registerValues);
    }


    return (


        <div className="main-container">
            
            <img src="./assets/images/recursos-didaxia/Lienzo bandera.png" alt="lienzo" className="didaxia-lienzo" />


            <div className="container-form">
                <h1 className="logo-d">DIDAXIA LOGO</h1>
                <form onSubmit={handleSubmit} className="form" id="loginForm" >
                    <div className="primero segundo tercero cuarto quinto">
                        <div className="first-layer">
                            <div className="user-container">
                                <label className="label-user inputd">
                                    <span className="user-input">Usuario o correo electrónico</span>
                                    <input aria-label="Usuario o correo electrónico"
                                        aria-required="true" autoCapitalize="off" autoCorrect="off"
                                        type="text"
                                        className="input first second focus-visible" value={registerValues.username} onChange={handleInputChange} />
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
                                        type="password" className="input first second focus-visible" value={registerValues.password} onChange={handleInputChange} />
                                </label>
                                <div className="fix">
                                    <div className="primero segundo tercero cuarto sexto">
                                        <button className="btn btn-show btn-btn"
                                            type="button">Mostrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="first-layer">
                            <div className="user-container">
                                <div className="label-user inputd">
                                    <span className="user-input">Rol</span>
                                    <select className="input first second focus-visible" name="role"  value={registerValues.role} onChange={handleInputChange} >
                                        <option value="STUDENT">Estudiante</option>
                                        <option value="REPRESENTATIVE">Apoderado</option>
                                        <option value="PROFESSOR">Profesor</option>
                                        <i className="bi bi-chevron-down">kjhk</i>
                                    </select>
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

                <button onClick={handleSubmit}>SUbmit</button>
            </div>

        </div>
    )
}
