import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const NavigationHook = () => {
    const navigate = useNavigate();

    const navigateToLogin = useCallback(() => navigate("/"), [navigate]);
    const navigateToRegister = useCallback(() => navigate("/register"), [navigate]);
    const navigateToDashboard = useCallback(() => navigate("/dashboard"), [navigate]);
    const navigateToProfile = useCallback(() => navigate("/profile"), [navigate]);
    const navigateToMyProject = useCallback(() => navigate("/my-project"), [navigate]);
    const navigateToEnQueVoy = useCallback(() => navigate("/en-que-voy"), [navigate]);
    const navigateToAprende = useCallback(() => navigate("/aprende"), [navigate]);
    const navigateToStatementOfAccount = useCallback(() => navigate("/statement-of-account"), [navigate]);
    const navigateToPqrs = useCallback(() => navigate("/PQRs"), [navigate]);

    const handleNavigation = {
        navigateToLogin,
        navigateToRegister,
        navigateToDashboard,
        navigateToProfile,
        navigateToMyProject,
        navigateToEnQueVoy,
        navigateToAprende,
        navigateToStatementOfAccount,
        navigateToPqrs
    }

    return {
        handleNavigation
    }
}