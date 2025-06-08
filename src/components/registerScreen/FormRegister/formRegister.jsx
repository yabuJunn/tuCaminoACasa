import "./FormRegister.css";

import { useState } from "react";
import { NavigationHook } from "../../../hooks/navigationHook";
import { signUpSupabase } from "../../../services/supabase/register";

const FormRegister = () => {
    const { handleNavigation } = NavigationHook()
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target["password-confirm"].value;

        if (password !== confirm) {
            setError("Las contraseñas no coinciden.");
            setSuccess("");
            return;
        }

        // Guardar el nuevo usuario
        const signUpResponse = await signUpSupabase(email, password, {
            name: e.target.name?.value || "", // Si tienes un campo de nombre
            cedula: e.target.cedula?.value || null, // Si tienes un campo de cédula
            cellphone: e.target.cellphone?.value || null // Si tienes un campo de celular
        });

        if (!signUpResponse || !signUpResponse.success) {
            setError(signUpResponse ? signUpResponse.message : "Error al crear la cuenta.");
            setSuccess("");
            return;
        } else {
            setSuccess(signUpResponse.message);
            setError("");
            handleNavigation.navigateToDashboard(); // Redirigir a la dashboard después del registro exitoso
        }

        // Limpiar el formulario
        e.target.reset();
    };

    return (
        <div id="registerForm">
            {/* <h1 id="register-title">¡Regístrate ahora!</h1> */}
            <div id="register-box">
                <h2 id="register-heading" className="register-heading">Crear una cuenta</h2>
                <p id="register-description">Ingresa tus datos para crear una cuenta</p>

                <form id="register-form" onSubmit={handleSubmit}>
                    <div id="email-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Ingresa tu email" />
                    </div>
                    <div id="name-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required placeholder="Ingresa tu nombre" />
                    </div>
                    <div id="phone-group">
                        <label htmlFor="phone">Teléfono</label>
                        <input type="tel" id="phone" name="phone" required placeholder="Ingresa tu teléfono" />
                    </div>
                    <div id="id-group">
                        <label htmlFor="id">Cédula</label>
                        <input type="text" id="id" name="id" required placeholder="Ingresa tu cédula" />
                    </div>
                    <div id="password-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña" />
                    </div>
                    <div id="confirm-password-group">
                        <label htmlFor="password-confirm">Confirmar contraseña</label>
                        <input type="password" id="password-confirm" name="password-confirm" required placeholder="Confirma tu contraseña" />
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
