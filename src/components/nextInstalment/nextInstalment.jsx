import "./nextInstalment.css"

import nextInstalmentIcon from "../../assets/svg/nextInstalmentIcon.svg"

const mockNextInstalment = {
    amount: 3000000,
    deadline: "17 de Marzo de 2025",
    remainingInstallments: 48
}

export const NextInstalment = () => {
    return <>
        <div id="accruedPaymentContainer">
            <div id="accruedPaymentTitleContainer">
                <h2>Tu próxima cuota</h2>
                <div id="accruedPaymentTitleIcon">
                    <img src={nextInstalmentIcon} alt="" />
                </div>
            </div>

            <div id="accruedPaymentContent">
                <h3>${mockNextInstalment.amount} COP</h3>
                <p>Fecha: {mockNextInstalment.deadline}</p>
                <p>Cuotas Restantes: {mockNextInstalment.remainingInstallments}</p>
            </div>

            <button>
                {"Pagar cuota >"}
            </button>
        </div>
    </>
}