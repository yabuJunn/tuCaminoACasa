import FormProfile from "../../components/FormProfile/formProfile";
import FormPrefrences from "../../components/FormPreferences/formPreferences";

const ProfileScreen = () => {
    return(
        <>
            <main className='page' id='profilePage'>
                <div id="header-profile">
                    <h1>Perfil de usuario</h1>
                    <p>Bienvenida a tu Perfil, ¡Ve, aquí podrás cambiar tú información para tenerla actualizada!</p>
                </div>
                <div id="photo-profile">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Foto de perfil" />
                    <input type="file" name="photo-user" id="upload-photo-user" />
                </div>
                <FormProfile></FormProfile>
                <FormPrefrences></FormPrefrences>
            </main>
        </>
    )
};

export default ProfileScreen;