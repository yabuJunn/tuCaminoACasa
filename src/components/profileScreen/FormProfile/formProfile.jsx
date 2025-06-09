import "./formProfile.css";

import { useSelector } from "react-redux";
import IconEdit from "../../../assets/svg/profileScreen/Icon-pen-edit.svg";

const FormProfile = () => {
  const userStore = useSelector((state) => state.main.user);

  return (
    <div id="formProfile">
      <form id="editProfileForm">
        <h1 id="profile-form-title">Información personal</h1>
        <div className="pairRow">
          <div id="1">
            <div className="formGroup" id="name-group">
              <label htmlFor="name">Nombre completo</label>
              <div className="input-edit-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userStore?.name || ""}
                  readOnly
                />
                <button type="button" className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>

            <div className="formGroup" id="email-group">
              <label htmlFor="email">Email de contacto</label>
              <div className="input-edit-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userStore?.email || ""}
                  readOnly
                />
                <button type="button" className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>
          </div>

          <div id="2">
            <div className="formGroup" id="credential-group">
              <label htmlFor="credential">Cédula</label>
              <div className="input-edit-wrapper">
                <input
                  type="text"
                  id="credential"
                  name="credential"
                  value={userStore?.cedula || ""}
                  readOnly
                />
                <button type="button" className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>

            <div className="formGroup" id="phone-group">
              <label htmlFor="phone">Celular</label>
              <div className="input-edit-wrapper">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={userStore?.cellphone || ""}
                  readOnly
                />
                <button type="button" className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" id="profile-submit-button">Actualizar</button>
      </form>
    </div>
  );
};

export default FormProfile;