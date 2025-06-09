import "./profile.css";

import { useGetUserData } from "../../hooks/getUserDataHook";
import { GlobalNavBar } from "../../components/navigation/globalNavBar/globalNavBar"

import FormProfile from "../../components/profileScreen/FormProfile/formProfile";
import FormPrefrences from "../../components/profileScreen/FormPreferences/formPreferences";

const ProfileScreen = () => {
    useGetUserData();

    return (
        <>
            <main className='page' id='profilePage'>
                <GlobalNavBar />
                <div id="header-profile">
                    <h1 id="profile-title">Perfil de usuario</h1>
                    <p id="profile-subtitle">Bienvenida a tu <strong>Perfil</strong>, ¡Ve, aquí podrás cambiar tú información para tenerla actualizada!</p>
                </div>
                <div id="photo-profile">
                    <img id="profile-photo" src="https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo=" alt="Foto de perfil" />
                    {/* <input type="file" name="photo-user" id="upload-photo-user" style={{ display: 'none' }} />
                    <label htmlFor="upload-photo-user" id="upload-photo-label">Editar</label> */}
                </div>
                <FormProfile />
                <FormPrefrences />
            </main>
        </>
    )
};

export default ProfileScreen;