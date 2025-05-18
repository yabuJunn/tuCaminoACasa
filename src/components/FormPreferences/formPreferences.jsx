import IconLanguage from "../../assets/Iconos/Icon-language.svg";
import IconNotify from "../../assets/Iconos/Icon-notification.svg";
import "./formPreferences.css";

const FormPrefrences = () => {
    return (
<>
  <div id="formPreferences">
    <h1 id="preferences-title">Preferencias</h1>
    <div id="preferences-container">
      <div className="preference-block" id="language">
        <img src={IconLanguage} alt="Ícono lenguaje" className="preference-icon"/>
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
        <img src={IconNotify} alt="Ícono notificación" className="preference-icon"/>
        <div className="preference-info">
          <h2>Notificaciones</h2>
          <p>Correos</p>
        </div>
        <button id="deactivate-button">Desactivar</button>
      </div>
    </div>

    <button id="logout-button">Cerrar sesión</button>
  </div>
</>
    )
};

export default FormPrefrences;