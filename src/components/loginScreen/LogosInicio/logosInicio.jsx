import "./logosInicio.css";

import Logo from "../../../assets/svg/logos/Logo-TuCaminoACasa.svg";
import LogoJM from "../../../assets/svg/logos/Logo-JaramilloMora.svg";

const LogosInicio = () => {
    return (
        <>
            <div className="logo-container">
                <img src={Logo} alt="Logo_Tu_Camino_A_Casa" />
                <img src={LogoJM} alt="Logo_Jaramillo_Mora" />
            </div>
        </>
    )
};

export default LogosInicio;