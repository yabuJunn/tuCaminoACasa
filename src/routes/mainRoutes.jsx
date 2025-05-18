import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;