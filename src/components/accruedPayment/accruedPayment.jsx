import "./accruedPayment.css";

import accruedPaymentIcon from "../../assets/svg/accruedPaymentIcon.svg"

const mockPayment = {
    accruedPayment: "36'000.000",
    numberOfPayments: 12,
    totalPayments: 60,
    nextPayment: 3000000,
    lastPayment: 3000000
}

export const AccruedPayment = () => {
    return <>
        <div id="accruedPaymentContainer">
            <div id="accruedPaymentTitleContainer">
                <h2>Lo que has pagado</h2>
                <div id="accruedPaymentTitleIcon">
                    <img src={accruedPaymentIcon} alt="" />
                </div>
            </div>

            <div id="accruedPaymentContent">
                <h3>${mockPayment.accruedPayment} COP</h3>
                <p>Cuotas pagadas: {mockPayment.numberOfPayments} de {mockPayment.totalPayments}</p>
                <p>Último pago: ${mockPayment.lastPayment} COP</p>
            </div>

            <button>
                Ver más detalles
            </button>
        </div>
    </>
}