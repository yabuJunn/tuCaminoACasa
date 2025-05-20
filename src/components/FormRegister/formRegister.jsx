import "./FormRegister.css"

const FormLogin = () => {
    return(
        <>
            <div id="registerForm">
                <h1 id="register-title">¡Regístrate ahora!</h1>
                <div id="register-box">
                    <h2 id="register-heading" className="register-heading">Crear una cuenta</h2>
                    <p id="register-description">Ingresa tus datos para crear una cuenta</p>
                    <form id="register-form">
                        <div id="email-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div id="password-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div id="confirm-password-group">
                            <label htmlFor="password-confirm">Confirmar contraseña</label>
                            <input type="password" id="password-confirm" name="confirm" required />
                        </div>
                        <button type="submit" id="register-button">Registrarse</button>
                    </form>
                    <p id="login-paragraph">¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
                </div>
            </div>
        </>
    )
}

export default FormLogin;