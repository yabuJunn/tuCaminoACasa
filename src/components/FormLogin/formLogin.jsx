const FormLogin = () => {
    return (
        <>
            <div id="loginForm">
                <h1>¡Bienvenido de nuevo!</h1>
                <div>
                    <h2>Iniciar sesión</h2>
                    <p>Ingresa tus datos para acceder a tu cuenta</p>
                    <form>
                        <div>
                            <label htmlFor="email">Emal</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required />
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit">Iniciar sesión</button>
                    </form>
                    <p>¿Aun no tienes una cuenta? <a href="#">Regístrate ahora</a></p>
                </div>
            </div>
        </>
    )
};

export default FormLogin;