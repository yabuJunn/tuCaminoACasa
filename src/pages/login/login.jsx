import "./login.css";

import FormLogin from "../../components/loginScreen/FormLogin/formLogin";
import LogosInicio from "../../components/loginScreen/LogosInicio/logosInicio";
import FondoLogin from '../../assets/svg/loginScreen/Fondo-LoginRegister.svg';

const LoginScreen = () => {
    return (
        <>
            <main className='page' id='loginPage'>
                <img id="fondoLogin" src={FondoLogin} alt="Fondo-LoginRegister" />

                <LogosInicio></LogosInicio>
                <FormLogin></FormLogin>
                
            </main>
        </>
    )
};

export default LoginScreen;