import LoginScreen from "../pages/login/login";
import RegisterScreen from "../pages/register/register";
import { DashboardPage } from "../pages/dashboard/dashboardPage";
import { EnQueVoyPage } from "../pages/en-que-voy/enQueVoyPage.jsx"

export const mainRoutes = [
    {
        path: "/",
        element: <LoginScreen></LoginScreen>,

    },
    {
        path: "/register",
        element: <RegisterScreen></RegisterScreen>,
    },
    {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,

    },
    {
        path: '/en-que-voy',
        element: <EnQueVoyPage></EnQueVoyPage>,
    },
    {
        path: "/my-project",
        element: <MyProject />,
    },
]
