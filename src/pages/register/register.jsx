import FormRegister from '../../components/FormRegister/formRegister';
import LogosInicio from '../../components/LogosInicio/logosInicio';
import FondoRegister from '../../assets/FondoLoginRegister/Fondo-LoginRegister.svg';
import "./register.css";
const RegisterScreen = () => {
    return (
        <>
            <main className='page' id='registerPage'>
                <img id="fondoRegister" src={FondoRegister} alt="Fondo-LoginRegister" />
                <LogosInicio></LogosInicio>
                <FormRegister></FormRegister>
            </main>
        </>
    )
};

export default RegisterScreen;