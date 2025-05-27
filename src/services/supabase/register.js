export async function signUp(email, password, additionalData) {
    // Crear el usuario en Supabase Auth
    const { user, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signUpError) {
        console.error("Error creando usuario:", signUpError.message);
        return;
    }

    // Insertar datos adicionales en la tabla `users`
    const { error: insertError } = await supabase
        .from("users")
        .insert([
            {
                id: user.id, // usa el mismo id del auth
                name: additionalData.name,
                email,
                cedula: additionalData.cedula,
                cellphone: additionalData.cellphone,
                created_at: new Date().toISOString(),
            },
        ]);

    if (insertError) {
        console.error("Error guardando datos adicionales:", insertError.message);
    } else {
        console.log("¡Registro completo!");
    }
}
