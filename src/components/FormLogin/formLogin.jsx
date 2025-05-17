const FormLogin = () => {
    return (
        <>
            <div>
                <img src="#" alt="logo_tu_camino_a_casa" />
                <img src="#" alt="logo_Jaramillo_Mora" />
            </div>
            <div>
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
                        </div>
                        <button type="submit">Iniciar sesión</button>
                    </form>
                    <p>¿No tienes cuenta? <a href="#">Regístrate aquí</a></p>
                </div>
            </div>
        </>
    )
};

export default FormLogin;