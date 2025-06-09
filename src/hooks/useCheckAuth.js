import { useEffect } from "react";
import { NavigationHook } from "./navigationHook";

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