const FormLogin = () => {
    return(
        <>
            <div id="registerForm">
                <h1>¡Regístrate ahora!</h1>
                <div>
                    <h2>Crear una cuenta</h2>
                    <p>Ingresa tus datos para crear una cuenta</p>
                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div>
                            <label htmlFor="password">Confirmar contraseña</label>
                            <input type="password" id="password-confirm" name="confirm" required />
                        </div>
                        <button type="submit">Registrarse</button>
                    </form>
                    <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
                </div>
            </div>
        </>
    )
}

export default FormLogin;