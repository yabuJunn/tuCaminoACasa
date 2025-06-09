import "./formProfile.css";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateUserData } from "../../../services/supabase/userService";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store";

import IconEdit from "../../../assets/svg/profileScreen/Icon-pen-edit.svg";

const FormProfile = () => {
  const userStore = useSelector((state) => state.main.user);
  const dispatch = useDispatch();

  // Estado general de edición
  const [editMode, setEditMode] = useState(false);

  // Estado de los campos
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cedula: "",
    cellphone: ""
  });

  const [editable, setEditable] = useState({
    name: false,
    email: false,
    cedula: false,
    cellphone: false
  });

  useEffect(() => {
    if (userStore) {
      setFormData({
        name: userStore.name || "",
        email: userStore.email || "",
        cedula: userStore.cedula || "",
        cellphone: userStore.cellphone || ""
      });
    }
  }, [userStore]);

  // Activa/desactiva todos los campos
  const toggleEditMode = () => {
    const newMode = !editMode;
    setEditMode(newMode);
    setEditable({
      name: newMode,
      email: newMode,
      cedula: newMode,
      cellphone: newMode
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = userStore?.id;
    if (!userId) {
      console.error("No hay ID de usuario disponible.");
      return;
    }

    const result = await updateUserData(userId, formData);

    if (result.success) {
      alert("Perfil actualizado correctamente.");

      // Actualizar Redux store
      dispatch(setUser({
        user: {
          ...formData
        }
      }));

      // Salir del modo edición
      setEditMode(false);
      setEditable({
        name: false,
        email: false,
        cedula: false,
        cellphone: false
      });
    } else {
      alert("Error al actualizar: " + result.error.message);
    }
  };

  return (
    <div id="formProfile">
      <form id="editProfileForm" onSubmit={handleSubmit}>
        <h1 id="profile-form-title">Información personal</h1>

        <div className="pairRow">
          <div id="1">
            {/* Nombre */}
            <div className="formGroup">
              <label htmlFor="name">Nombre completo</label>
              <div className="input-edit-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  readOnly={!editable.name}
                />
                <button type="button" onClick={() => setEditable(prev => ({ ...prev, name: true }))} className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="formGroup">
              <label htmlFor="email">Email de contacto</label>
              <div className="input-edit-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  readOnly={!editable.email}
                />
                <button type="button" onClick={() => setEditable(prev => ({ ...prev, email: true }))} className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>
          </div>

          <div id="2">
            {/* Cédula */}
            <div className="formGroup">
              <label htmlFor="cedula">Cédula</label>
              <div className="input-edit-wrapper">
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  readOnly={!editable.cedula}
                />
                <button type="button" onClick={() => setEditable(prev => ({ ...prev, cedula: true }))} className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>

            {/* Celular */}
            <div className="formGroup">
              <label htmlFor="cellphone">Celular</label>
              <div className="input-edit-wrapper">
                <input
                  type="text"
                  id="cellphone"
                  name="cellphone"
                  value={formData.cellphone}
                  onChange={handleChange}
                  readOnly={!editable.cellphone}
                />
                <button type="button" onClick={() => setEditable(prev => ({ ...prev, cellphone: true }))} className="edit-button">
                  <img src={IconEdit} alt="Editar" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="formActions">
          <button type="button" id="profile-activate-update" onClick={toggleEditMode}>
            {editMode ? "Desactivar edición" : "Activar edición"}
          </button>
          <button
            type="submit"
            id="profile-submit-button"
            className={editMode ? "activated" : "deactivated"}
            disabled={!editMode}
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProfile;
