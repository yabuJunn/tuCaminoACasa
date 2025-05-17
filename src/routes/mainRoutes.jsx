import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginScreen, DashboardScreen } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/dashboard" element={<DashboardScreen />} />                
            </Routes>
        </BrowserRouter>
    );
};

export default Router;