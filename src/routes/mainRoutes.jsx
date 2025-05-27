import LoginScreen from "../pages/login/login";
import RegisterScreen from "../pages/register/register";
import { DashboardPage } from "../pages/dashboard/dashboardPage";
import { EnQueVoyPage } from "../pages/en-que-voy/enQueVoyPage.jsx"
import { MyProject } from "../pages/myProject/myProject.jsx";
import ProfileScreen from "../pages/profile/profile";
import StatementOfAccount from "../pages/statementOfAccount/statementOfAccount.jsx";
import PaymentsAndFees from "../pages/statementOfAccount/paymentsAndFees.jsx";
import PQRs from "../pages/PQRs/PQRs.jsx";

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