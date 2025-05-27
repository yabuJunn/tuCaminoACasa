export async function signIn(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error("Error iniciando sesión:", error.message);
    } else {
        console.log("Inicio de sesión exitoso:", user);
    }
}

export async function getUserData() {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

    if (error) {
        console.error("Error obteniendo perfil:", error.message);
        return null;
    }

    return data;
}
