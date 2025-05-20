import FormLogin from "../../components/FormLogin/formLogin";
import LogosInicio from "../../components/LogosInicio/logosInicio";
import FondoLogin from '../../assets/FondoLoginRegister/Fondo-LoginRegister.svg';
import "./login.css";
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