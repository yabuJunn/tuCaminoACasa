import "./globalNavBar.css"

import { ProjectSelector } from "../projectSelector/projectSelector"
import { NavigationHook } from "../../hooks/navigationHook"

import navbarAppLogo from "../../assets/svg/logoAppNavbar.svg"

import dashboardIconWhite from "../../assets/svg/dashboardIconWhite.svg"
import dashboardIconBlack from "../../assets/svg/dashboardIconBlack.svg"

import myProjectIconWhite from "../../assets/svg/myProjectIconWhite.svg"
import myProjectIconBlack from "../../assets/svg/myProjectIconBlack.svg"

import whatAmIGoingToDoIconWhite from "../../assets/svg/whatAmIGoingToDoIconWhite.svg"
import whatAmIGoingToDoIconBlack from "../../assets/svg/whatAmIGoingToDoIconBlack.svg"

import documentsIconWhite from "../../assets/svg/documentsIconWhite.svg"
import documentsIconBlack from "../../assets/svg/documentsIconBlack.svg"

import bankStatementIconWhite from "../../assets/svg/bankStatementIconWhite.svg"
import bankStatementIconBlack from "../../assets/svg/bankStatementIconBlack.svg"

import learnIconWhite from "../../assets/svg/learnIconWhite.svg"
import learnIconBlack from "../../assets/svg/learnIconBlack.svg"


export const GlobalNavBar = () => {
    const { handleNavigation } = NavigationHook()
    return <>
        <aside id="globalSidebar__nav">
            <div className="sidebar__logo">
                <img src={navbarAppLogo} alt="appLogo" />
            </div>

            <ProjectSelector></ProjectSelector>

            <nav className="sidebar__nav">

                <button className="sidebar__link focus" id="dashboardButton">
                    <img src={dashboardIconBlack} alt="dashboardIcon" />
                    <span>Resumen</span>
                </button>


                <button className="sidebar__link" id="myProjectButtton" onClick={handleNavigation.navigateToMyProject}>
                    <img src={myProjectIconWhite} alt="myProjectIcon" />
                    <span>Mi Proyecto</span>
                </button>


                <button className="sidebar__link" id="whatAmIGoingToDoButton" onClick={handleNavigation.navigateToEnQueVoy} >
                    <img src={whatAmIGoingToDoIconWhite} alt="whatAmIGoingToDoIcon" />
                    <span>¿En qué voy?</span>
                </button>


                <button className="sidebar__link" id="documentsButton" onClick={handleNavigation.navigateToDashboard}>
                    <img src={documentsIconWhite} alt="documentsIcon" />
                    <span>Documentos</span>
                </button>


                <button className="sidebar__link" id="bankStatementButton" onClick={handleNavigation.navigateToDashboard}>
                    <img src={bankStatementIconWhite} alt="bankStatementIcon" />
                    <span>Estado cuenta</span>
                </button>

                <button className="sidebar__link" id="learnButton" onClick={handleNavigation.navigateToDashboard}>
                    <img src={learnIconWhite} alt="learnIcon" />
                    <span>Aprende</span>
                </button>

            </nav>
        </aside>
    </>
}