export const GlobalNavBar = () => {
    return <>
        <aside id="globalSidebar__nav">
            <div className="sidebar__logo">
                <img src="" alt="appLogo" />
            </div>

            <select name="project" id="projectSelection">
                <option value="violet">
                    <h2>Violet</h2>
                    <p>Apartamento</p>
                </option>
                <option value="panceNativo">
                    <h2>Pance Nativo</h2>
                    <p>Casa</p>
                </option>
            </select>

            <nav className="sidebar__nav">
                <ul>
                    <li className="sidebar__nav-item active">
                        <button className="sidebar__link">
                            <img src="" alt="dashboardIcon" />
                            <span>Resumen</span>
                        </button>
                    </li>
                    <li className="sidebar__nav-item">
                        <button className="sidebar__link">
                            <img src="" alt="myProjectIcon" />
                            <span>Mi Proyecto</span>
                        </button>
                    </li>
                    <li className="sidebar__nav-item">
                        <button className="sidebar__link">
                            <img src="" alt="whatAmIGoingToDoIcon" />
                            <span>¿En qué voy?</span>
                        </button>
                    </li>
                    <li className="sidebar__nav-item">
                        <button className="sidebar__link">
                            <img src="" alt="documentsIcon" />
                            <span>Documentos</span>
                        </button>
                    </li>
                    <li className="sidebar__nav-item">
                        <button className="sidebar__link">
                            <img src="" alt="bankStatementIcon" />
                            <span>Estado de cuenta</span>
                        </button>
                    </li>
                    <li className="sidebar__nav-item">
                        <button className="sidebar__link">
                            <img src="" alt="learnIcon" />
                            <span>Aprende</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    </>
}