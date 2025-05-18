import IconEdit from "../../assets/Iconos/Icon-pen-edit.svg";

const FormProfile = () => {
    return(
        <>
            <div id="formProfile">
                <form id="editProfileForm">
                    <h1>Información personal</h1>
                    <div className="formGroup">
                        <label htmlFor="name">Nombre completo</label>
                        <input type="text" id="name" name="name" required />
                        <img src={IconEdit} alt="Icono de editar" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email de contacto</label>
                        <input type="email" id="email" name="email" required />
                        <img src={IconEdit} alt="Icono de editar" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="credential">Cédula</label>
                        <input type="" id="credential" name="credential" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="phone">Celular</label>
                        <input type="number" id="number" name="number" required />
                        <img src={IconEdit} alt="Icono de editar" />
                    </div>
                    <button type="submit">Actualizar</button>
                </form>
            </div>
        </>
    )
};

export default FormProfile;