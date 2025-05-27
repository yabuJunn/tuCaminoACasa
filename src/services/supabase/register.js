import { supabase } from "./supabaseKeys";

export async function signUpSupabase(email, password, additionalData) {


    // Crear el usuario en Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signUpError) {
        console.error("Error creando usuario:", signUpError.message);
        return;
    }

    const user = data?.user;

    const cedula = parseInt(additionalData.cedula, 10);
    const cellphone = parseInt(additionalData.cellphone, 10);

    // Guardar el usuario recién creado
    const { error: insertError } = await supabase
        .from("users")
        .insert([
            {
                id: user.id,
                name: additionalData.name,
                email,
                cedula: isNaN(cedula) ? null : cedula,
                cellphone: isNaN(cellphone) ? null : cellphone,
                created_at: new Date().toISOString(),
            },
        ]);

    if (insertError) {
        console.error("Error guardando datos adicionales:", insertError.message);
        return {
            success: false,
            message: "Error guardando datos adicionales: " + insertError.message,
        };
    } else {
        console.log("¡Registro completo!");
        return {
            success: true,
            message: "¡Registro completo!",
        };
    }
}
