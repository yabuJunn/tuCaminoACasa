import { useEffect } from "react";
import { NavigationHook } from "./navigationHook";
import { isUserLoggedIn } from "../services/supabase/login";

export const useCheckAuth = () => {
    const { handleNavigation } = NavigationHook();

    useEffect(() => {
        async function checkAuth() {
            const isLoggedIn = await isUserLoggedIn();
            if (!isLoggedIn) {
                handleNavigation.navigateToLogin()
            }
        }

        checkAuth();
    }, []);
}