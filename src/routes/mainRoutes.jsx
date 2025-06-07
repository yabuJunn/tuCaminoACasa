import LoginScreen from "../pages/login/login";
import RegisterScreen from "../pages/register/register";
import { DashboardPage } from "../pages/dashboard/dashboardPage";
import { EnQueVoyPage } from "../pages/en-que-voy/enQueVoyPage.jsx"
import { MyProject } from "../pages/myProject/myProject.jsx";
import ProfileScreen from "../pages/profile/profile";
import { AprendePage } from "../pages/aprende/aprendePage/aprendePage.jsx"
import { AprendeBancoPage } from "../pages/aprende/aprendeBancoPage/aprendeBancoPage.jsx"
import { AprendeFirmaPage } from "../pages/aprende/aprendeFirmaPage/aprendeFirmaPage.jsx"
import { AprendeRegistroPage } from "../pages/aprende/aprendeRegistroPage/aprendeRegistroPage.jsx"
import { AprendeEntregaPage } from "../pages/aprende/aprendeEntregaPage/aprendeEntregaPage.jsx"
import { AprendeNoticiasPage } from "../pages/aprende/aprendeNoticiasPage/aprendeNoticiasPage.jsx"
import StatementOfAccount from "../pages/statementOfAccount/statementOfAccount.jsx";
import PaymentsAndFees from "../pages/statementOfAccount/paymentsAndFees.jsx";
import PQRs from "../pages/PQRs/PQRs.jsx";
import DocumentsPage from "../pages/documents/documentsPage.jsx";

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
        path: "/documents",
        element: <DocumentsPage></DocumentsPage>,
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
    {

        path: "/statement-of-account",
        element: <StatementOfAccount></StatementOfAccount>,

    },
    {
        path: "/payments-and-fees",
        element: <PaymentsAndFees></PaymentsAndFees>,

    },
    {
        path: "/PQRs",
        element: <PQRs></PQRs>,

    },
]