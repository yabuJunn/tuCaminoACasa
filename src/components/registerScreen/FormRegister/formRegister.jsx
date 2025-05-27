import { useState } from "react";
import "./FormRegister.css";
import { NavigationHook } from "../../../hooks/navigationHook";

const FormRegister = () => {
    const { handleNavigation } = NavigationHook()
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target["password-confirm"].value;

        if (password !== confirm) {
            setError("Las contraseñas no coinciden.");
            setSuccess("");
            return;
        }

        const newUser = { email, password };

        // Obtener usuarios existentes
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar si el usuario ya existe
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            setError("Este email ya está registrado.");
            setSuccess("");
            return;
        }

        // Guardar el nuevo usuario
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        setError("");
        setSuccess("¡Registro exitoso!");

        // Limpiar el formulario
        e.target.reset();
    };

    return (
        <div id="registerForm">
            <h1 id="register-title">¡Regístrate ahora!</h1>
            <div id="register-box">
                <h2 id="register-heading" className="register-heading">Crear una cuenta</h2>
                <p id="register-description">Ingresa tus datos para crear una cuenta</p>

                <form id="register-form" onSubmit={handleSubmit}>
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
                        <input type="password" id="password-confirm" name="password-confirm" required />
                    </div>
                    <button type="submit" id="register-button">Registrarse</button>
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                <p id="login-paragraph">¿Ya tienes una cuenta? <a onClick={handleNavigation.navigateToLogin}>Inicia sesión</a></p>
            </div>
        </div>
    );
};

export default FormRegister;
