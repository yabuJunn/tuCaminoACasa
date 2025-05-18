import FormRegister from '../../components/FormRegister/formRegister';
import LogosInicio from '../../components/LogosInicio/logosInicio';

const RegisterScreen = () => {
    return (
        <>
            <main className='page' id='registerPage'>
                <LogosInicio></LogosInicio>
                <FormRegister></FormRegister>
            </main>
        </>
    )
};

export default RegisterScreen;