import "./formLogin.css";
import { useState } from "react";
import { NavigationHook } from "../../../hooks/navigationHook";
import { signIn, getUserData } from "../../../services/supabase/login";

const FormLogin = () => {
    const { handleNavigation } = NavigationHook();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);


        // Autenticación con Supabase
        const { user, error } = await signIn(email, password);

        if (error || !user) {
            setError(`Correo o contraseña incorrectos: ${error?.message || "Error desconocido"}`);
            setSuccess("");
            return;
        }

        // Obtener datos extra del usuario
        const userData = await getUserData();

        if (userData) {
            setSuccess("Inicio de sesión exitoso.");
            setError("");

            handleNavigation.navigateToDashboard();
        } else {
            setError("No se pudo obtener la información del usuario.");
            setSuccess("");
        }

        e.target.reset();
    };

    return (
        <div id="loginForm">
            <h1 id="login-title">¡Bienvenido de nuevo!</h1>
            <div id="login-box">
                <h2 className="login-heading">Iniciar sesión</h2>
                <p id="login-description">Ingresa tus datos para acceder a tu cuenta</p>

                <form id="login-form" onSubmit={handleSubmit}>
                    <div id="email-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Ingresa tu email"/>
                    </div>
                    <div id="password-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña"/>
                        <a href="#" id="forgot-password-link">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit" className="form-button" id="submit-button">Iniciar sesión</button>
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                <p id="signup-paragraph">
                    ¿Aun no tienes una cuenta? <a onClick={handleNavigation.navigateToRegister}>Regístrate ahora</a>
                </p>
            </div>
        </div>
    );
};

export default FormLogin;
