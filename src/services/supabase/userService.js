import { supabase } from "./supabaseKeys";

export async function updateUserData(id, data) {
    const { error } = await supabase
        .from("users")
        .update({
            name: data.name,
            email: data.email,
            cedula: data.cedula,
            cellphone: data.cellphone,
        })
        .eq("id", id); // usa el ID del usuario logueado

    if (error) {
        console.error("Error actualizando usuario:", error.message);
        return { success: false, error };
    }

    return { success: true };
}