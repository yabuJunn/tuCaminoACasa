import { DashboardPage } from "../pages/dashboard/dashboardPage.jsx"
import { EnQueVoyPage } from "../pages/en-que-voy/enQueVoyPage.jsx"
import { AprendePage } from "../pages/aprendePage/aprendePage.jsx"
import { AprendeBancoPage } from "../pages/aprendeBancoPage/aprendeBancoPage.jsx"
import { AprendeFirmaPage } from "../pages/aprendeFirmaPage/aprendeFirmaPage.jsx"


export const mainRoutes = [
    {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,
    },
     {
  path: '/en-que-voy', 
       element: <EnQueVoyPage></EnQueVoyPage>,
    },
    {
    path: '/aprende', 
       element: <AprendePage></AprendePage>,
    },
 { path: '/aprende/banco', 
       element: <AprendeBancoPage></AprendeBancoPage>,
    },

    { path: '/aprende/firma', 
       element: <AprendeFirmaPage></AprendeFirmaPage>,
    },
    
]