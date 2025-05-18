import { DashboardPage } from "../pages/dashboard/dashboardPage.jsx"
import { EnQueVoyPage } from "../pages/en-que-voy/enQueVoyPage.jsx"

export const mainRoutes = [
    {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,
    },
     {
  path: '/en-que-voy', 
       element: <EnQueVoyPage></EnQueVoyPage>,
    },
]