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

export async function getSession() {
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    console.log("Token actual:", session?.access_token);
    console.log("Usuario:", session?.user);
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Error cerrando sesión:", error.message);
    } else {
        console.log("Sesión cerrada exitosamente");
    }
}
