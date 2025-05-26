import "./globalNavBar.css"
import { ProjectSelector } from "../projectSelector/projectSelector"
import { NavigationHook } from "../../hooks/navigationHook"
import { useLocation } from "react-router-dom"

import navbarAppLogo from "../../assets/Logos/IconTuCaminoACasaWhite.png"

import dashboardIconWhite from "../../assets/svgIcons/IconResumeWhite.svg"
import dashboardIconBlack from "../../assets/svgIcons/iconResumeBlack.svg"
import myProjectIconWhite from "../../assets/svgIcons/IconMyProjectWhite.svg"
import myProjectIconBlack from "../../assets/svgIcons/IconMyProjectBlack.svg"
import whatAmIGoingToDoIconWhite from "../../assets/svgIcons/IconWhatAmIGoingToDoWhite.svg"
import whatAmIGoingToDoIconBlack from "../../assets/svgIcons/IconWhatAmIGoingToDoBlack.svg"
import documentsIconWhite from "../../assets/svgIcons/IconDocumentsWhite.svg"
import documentsIconBlack from "../../assets/svgIcons/IconDocumentsBlack.svg"
import bankStatementIconWhite from "../../assets/svgIcons/IconStatementAccountWhite.svg"
import bankStatementIconBlack from "../../assets/svgIcons/IconStatementAccountBlack.svg"
import learnIconWhite from "../../assets/svgIcons/IconLearnWhite.svg"
import learnIconBlack from "../../assets/svgIcons/IconLearnBlack.svg"

export const GlobalNavBar = () => {
    const { handleNavigation } = NavigationHook()
    const location = useLocation()
    const pathname = location.pathname

    const isActive = (route) => pathname === route

    return (
        <aside id="globalSidebar__nav">
            <div className="sidebar__logo">
                <img src={navbarAppLogo} alt="appLogo" />
            </div>

            <ProjectSelector />

            <nav className="sidebar__nav">
                <button
                    className={`sidebar__link ${isActive("/dashboard") ? "focus" : ""}`}
                    id="dashboardButton"
                    onClick={handleNavigation.navigateToDashboard}
                >
                    <img src={isActive("/dashboard") ? dashboardIconBlack : dashboardIconWhite} alt="dashboardIcon" />
                    <span>Resumen</span>
                </button>

                <button
                    className={`sidebar__link ${isActive("/my-project") ? "focus" : ""}`}
                    id="myProjectButton"
                    onClick={handleNavigation.navigateToMyProject}
                >
                    <img src={isActive("/my-project") ? myProjectIconBlack : myProjectIconWhite} alt="myProjectIcon" />
                    <span>Mi Proyecto</span>
                </button>

                <button
                    className={`sidebar__link ${isActive("/en-que-voy") ? "focus" : ""}`}
                    id="whatAmIGoingToDoButton"
                    onClick={handleNavigation.navigateToEnQueVoy}
                >
                    <img src={isActive("/en-que-voy") ? whatAmIGoingToDoIconBlack : whatAmIGoingToDoIconWhite} alt="whatAmIGoingToDoIcon" />
                    <span>¿En qué voy?</span>
                </button>

                <button
                    className={`sidebar__link ${isActive("/documents") ? "focus" : ""}`}
                    id="documentsButton"
                    onClick={handleNavigation.navigateToDashboard}
                >
                    <img src={isActive("/documents") ? documentsIconBlack : documentsIconWhite} alt="documentsIcon" />
                    <span>Documentos</span>
                </button>

                <button
                    className={`sidebar__link ${isActive("/bank-statement") ? "focus" : ""}`}
                    id="bankStatementButton"
                    onClick={handleNavigation.navigateToDashboard}
                >
                    <img src={isActive("/bank-statement") ? bankStatementIconBlack : bankStatementIconWhite} alt="bankStatementIcon" />
                    <span>Estado cuenta</span>
                </button>

                <button
                    className={`sidebar__link ${isActive("/learn") ? "focus" : ""}`}
                    id="learnButton"
                    onClick={handleNavigation.navigateToDashboard}
                >
                    <img src={isActive("/learn") ? learnIconBlack : learnIconWhite} alt="learnIcon" />
                    <span>Aprende</span>
                </button>
            </nav>
        </aside>
    )
}
