import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginScreen, DashboardScreen, RegisterScreen } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />               
                <Route path="/dashboard" element={<DashboardScreen />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default Router;