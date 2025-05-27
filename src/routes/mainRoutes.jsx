import LoginScreen from "../pages/login/login";
import RegisterScreen from "../pages/register/register";
import { DashboardPage } from "../pages/dashboard/dashboardPage";
import { EnQueVoyPage } from "../pages/en-que-voy/enQueVoyPage.jsx"
import { MyProject } from "../pages/myProject/myProject.jsx";
import ProfileScreen from "../pages/profile/profile";
import { AprendePage } from "../pages/aprendePage/aprendePage.jsx"
import { AprendeBancoPage } from "../pages/aprendeBancoPage/aprendeBancoPage.jsx"
import { AprendeFirmaPage } from "../pages/aprendeFirmaPage/aprendeFirmaPage.jsx"
import { AprendeRegistroPage } from "../pages/aprendeRegistroPage/aprendeRegistroPage.jsx"
import { AprendeEntregaPage } from "../pages/aprendeEntregaPage/aprendeEntregaPage.jsx"
import { AprendeNoticiasPage } from "../pages/aprendeNoticiasPage/aprendeNoticiasPage.jsx"

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
    {
        path: "/profile",
        element: <ProfileScreen></ProfileScreen>,

    },
    {
        path: '/aprende',
        element: <AprendePage></AprendePage>,
    },
    {
        path: '/aprende/banco',
        element: <AprendeBancoPage></AprendeBancoPage>,
    },

    {
        path: '/aprende/firma',
        element: <AprendeFirmaPage></AprendeFirmaPage>,
    },
    {
        path: '/aprende/registro',
        element: <AprendeRegistroPage></AprendeRegistroPage>,
    },
    {
        path: '/aprende/entrega',
        element: <AprendeEntregaPage></AprendeEntregaPage>,
    },
    {
        path: '/aprende/noticias',
        element: <AprendeNoticiasPage></AprendeNoticiasPage>,
    },

]