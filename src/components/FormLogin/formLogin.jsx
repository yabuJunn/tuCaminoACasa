import "./formLogin.css";

import { useState } from "react";
import { NavigationHook } from "../../hooks/navigationHook";

const FormLogin = () => {
    const { handleNavigation } = NavigationHook()
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            setSuccess("Inicio de sesión exitoso.");
            setError("");

            // Puedes guardar en localStorage que el usuario inició sesión
            localStorage.setItem("currentUser", JSON.stringify(foundUser));

            // Limpiar formulario
            e.target.reset();
            handleNavigation.navigateToDashboard()
        } else {
            setError("Correo o contraseña incorrectos.");
            setSuccess("");
        }
    };

    return (
        <div id="loginForm">
            <h1 id="login-title">¡Bienvenido de nuevo!</h1>
            <div id="login-box">
                <h2 id="login-heading" className="login-heading">Iniciar sesión</h2>
                <p id="login-description">Ingresa tus datos para acceder a tu cuenta</p>

                <form id="login-form" onSubmit={handleSubmit}>
                    <div id="email-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div id="password-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required />
                        <a href="#" id="forgot-password-link">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit" className="form-button" id="submit-button">Iniciar sesión</button>
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                <p id="signup-paragraph">¿Aun no tienes una cuenta? <a onClick={handleNavigation.navigateToRegister}>Regístrate ahora</a></p>
            </div>
        </div>
    );
};

export default FormLogin;