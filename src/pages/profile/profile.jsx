import FormProfile from "../../components/FormProfile/formProfile";
import FormPrefrences from "../../components/FormPreferences/formPreferences";
import "./profile.css";
const ProfileScreen = () => {
    return(
        <>
            <main className='page' id='profilePage'>
                <div id="header-profile">
                    <h1 id="profile-title">Perfil de usuario</h1>
                    <p id="profile-subtitle">Bienvenida a tu <strong>Perfil</strong>, ¡Ve, aquí podrás cambiar tú información para tenerla actualizada!</p>
                </div>
                <div id="photo-profile">
                    <img id="profile-photo" src="https://www.w3schools.com/howto/img_avatar.png" alt="Foto de perfil" />
                    <input type="file" name="photo-user" id="upload-photo-user" style={{ display: 'none' }} />
                    <label htmlFor="upload-photo-user" id="upload-photo-label">Editar</label>
                </div>
                <FormProfile />
                <FormPrefrences />
            </main>
        </>
    )
};

export default ProfileScreen;