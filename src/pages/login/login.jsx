import FormLogin from "../../components/FormLogin/formLogin";
import LogosInicio from "../../components/LogosInicio/logosInicio";

const LoginScreen = () => {
    return (
        <>
            <main className='page' id='loginPage'>
                <LogosInicio></LogosInicio>
                <FormLogin></FormLogin>
            </main>
        </>
    )
};

export default LoginScreen;