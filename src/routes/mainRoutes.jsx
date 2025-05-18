import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginScreen, DashboardScreen, RegisterScreen, ProfileScreen } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />               
                <Route path="/dashboard" element={<DashboardScreen />} /> 
                <Route path="/profile" element={<ProfileScreen />} />
                {/* <Route path="/mi_proyecto" element={<MiProyectoScreen />} /> */}
                {/* <Route path="/en_que_voy" element={<EnQueVoyScreen />} /> */}
                {/* <Route path="/documentos" element={<DocumentosScreen />} /> */}
                {/* <Route path="/estado_de_cuenta" element={<EstadoDeCuentaScreen />} /> */}
                {/* <Route path="/aprende" element={<AprendeScreen />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;