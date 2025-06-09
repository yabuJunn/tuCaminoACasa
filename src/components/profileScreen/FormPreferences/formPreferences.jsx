import "./formPreferences.css";

import { signOut } from "../../../services/supabase/login";
import { NavigationHook } from "../../../hooks/navigationHook";

import IconLanguage from "../../../assets/svg/profileScreen/Icon-language.svg";
import IconNotify from "../../../assets/svg/profileScreen/Icon-notification.svg";

const FormPrefrences = () => {
  const { handleNavigation } = NavigationHook();

  const handleLogout = () => {
    signOut()
    handleNavigation.navigateToLogin();
  };

  return (
    <>
      <div id="formPreferences">
        {/* <h1 id="preferences-title">Preferencias</h1>
        <div id="preferences-container">
          <div className="preference-block" id="language">
            <img src={IconLanguage} alt="Ícono lenguaje" className="preference-icon" />
            <div className="preference-info">
              <h2>Lenguaje</h2>
              <p>Español</p>
            </div>
            <select name="language" id="project-user">
              <option value="Default">Seleccionar</option>
              <option value="Inglés">Inglés</option>
              <option value="Español">Español</option>
            </select>
          </div>

          <div className="preference-block" id="notifications">
            <img src={IconNotify} alt="Ícono notificación" className="preference-icon" />
            <div className="preference-info">
              <h2>Notificaciones</h2>
              <p>Correos</p>
            </div>
            <button id="deactivate-button">Desactivar</button>
          </div>
        </div> */}

        <button id="logout-button" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </>
  )
};

export default FormPrefrences;