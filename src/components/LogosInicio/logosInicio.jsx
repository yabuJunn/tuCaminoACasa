import Logo from "../../assets/Logos/Logo-TuCaminoACasa.svg";
import LogoJM from "../../assets/Logos/Logo-JaramilloMora.svg";

const LogosInicio = () => {
    return(
        <>
            <div>
                <img src={Logo} alt="Logo_Tu_Camino_A_Casa" />
                <img src={LogoJM} alt="Logo_Jaramillo_Mora" />
            </div>
        </>
    )
};

export default LogosInicio;