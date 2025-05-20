import { DashboardPage } from "../pages/dashboard/dashboardPage.jsx";
import MyProject from "../pages/myProject/myProject.jsx"

export const mainRoutes = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/my-project",
    element: <MyProject />,
  },
];
