import "./formProfile.css";

import IconEdit from "../../../assets/svg/profileScreen/Icon-pen-edit.svg";

const FormProfile = () => {
  return (
    <>
      <div id="formProfile">
        <form id="editProfileForm">
          <h1 id="profile-form-title">Información personal</h1>
          <div className="pairRow">
            <div id="1">
              <div className="formGroup" id="name-group">
                <label id="nombre" htmlFor="name">Nombre completo</label>
                <div className="input-edit-wrapper">
                  <input type="text" id="name" name="name" required placeholder="Carolina" />
                  <button type="button" className="edit-button">
                    <img src={IconEdit} alt="Icono de editar" />
                  </button>
                </div>
              </div>
              <div className="formGroup" id="email-group">
                <label id="correo" htmlFor="email">Email de contacto</label>
                <div className="input-edit-wrapper">
                  <input type="email" id="email" name="email" required placeholder="Carolina@email.com" />
                  <button type="button" className="edit-button">
                    <img src={IconEdit} alt="Icono de editar" />
                  </button>
                </div>
              </div>
            </div>

            <div id="2">
              <div className="formGroup" id="credential-group">
                <label id="cedula" htmlFor="credential">Cédula</label>
                <div className="input-edit-wrapper">
                  <input type="text" id="credential" name="credential" placeholder="1182673870" />
                  <button type="button" className="edit-button">
                    <img src={IconEdit} alt="Icono de editar" />
                  </button>
                </div>
              </div>
              <div className="formGroup" id="phone-group">
                <label id="telefono" htmlFor="phone">Celular</label>
                <div className="input-edit-wrapper">
                  <input type="number" id="number" name="number" required placeholder="3122166756" />
                  <button type="button" className="edit-button">
                    <img src={IconEdit} alt="Icono de editar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" id="profile-submit-button">Actualizar</button>
        </form>
      </div>
    </>
  )
};

export default FormProfile;