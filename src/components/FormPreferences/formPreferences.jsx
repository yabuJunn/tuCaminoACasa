import IconLanguage from "../../assets/Iconos/Icon-language.svg";
import IconNotify from "../../assets/Iconos/Icon-notification.svg";

const FormPrefrences = () => {
    return(
        <>
            <div id="formPreferences">
                <h1>Prefrencias</h1>
                <div id="language">
                    <img src={IconLanguage} alt="" />
                    <h2>Lenguaje</h2>
                    <p>Español</p>
                    <select name="project" id="project-user">
                        <option value="Default">Seleccionar</option>
                        <option value="Inglés">Inglés</option>
                        <option value="Español">Español</option>
                    </select>
                </div>
                <div id="notifications">
                    <img src={IconNotify} alt="" />
                    <h2>Notificaciones</h2>
                    <p>Correo</p>
                    <button>Desactivar</button>
                </div>
            </div>
        </>
    )
};

export default FormPrefrences;