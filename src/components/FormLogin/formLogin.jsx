import "./formLogin.css"; 
const FormLogin = () => {
    return (
        <>
            <div id="loginForm">
                <h1 id="login-title">¡Bienvenido de nuevo!</h1>
                <div id="login-box">
                    <h2 id="login-heading" className="login-heading">Iniciar sesión</h2>
                    <p id="login-description">Ingresa tus datos para acceder a tu cuenta</p>
                    <form id="login-form">
                        <div id="email-group">
                            <label id="email" htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div id="password-group">
                            <label id="contraseña"htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required />
                            <a href="#" id="forgot-password-link">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" className="form-button" id="submit-button">Iniciar sesión</button>
                    </form>
                    <p id="signup-paragraph">¿Aun no tienes una cuenta? <a href="#">Regístrate ahora</a></p>
                </div>
            </div>
        </>
    )
};

export default FormLogin;