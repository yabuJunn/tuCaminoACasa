import "./register.css";

import FormRegister from '../../components/registerScreen/FormRegister/formRegister';
import LogosInicio from '../../components/loginScreen/LogosInicio/logosInicio';
import FondoRegister from '../../assets/svg/loginScreen/Fondo-LoginRegister.svg';

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