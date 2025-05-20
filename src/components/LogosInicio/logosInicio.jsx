import Logo from "../../assets/Logos/Logo-TuCaminoACasa.svg";
import LogoJM from "../../assets/Logos/Logo-JaramilloMora.svg";
import "./logosInicio.css";

const LogosInicio = () => {
    return(
        <>
            <div className="logo-container">
                <img src={Logo} alt="Logo_Tu_Camino_A_Casa" />
                <img src={LogoJM} alt="Logo_Jaramillo_Mora" />
            </div>
        </>
    )
};

export default LogosInicio;