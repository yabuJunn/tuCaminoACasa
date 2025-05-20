import LoginScreen from "../pages/login/login";
import RegisterScreen from "../pages/register/register";

export const mainRoutes = [
    {
        path: "/",
        element: <LoginScreen></LoginScreen>,

    },
    {
        path: "/register",
        element: <RegisterScreen></RegisterScreen>,
    }
]