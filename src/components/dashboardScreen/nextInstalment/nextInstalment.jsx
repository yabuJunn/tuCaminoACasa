import "./nextInstalment.css";

import nextInstalmentIcon from "../../../assets/svg/dashboardScreen/nextInstalmentIcon.svg";

const mockNextInstalment = {
  amount: "3'000.000",
  deadline: "17 de Marzo de 2025",
  remainingInstallments: 48
};

export const NextInstalment = () => {
  return (
    <div id="nextInstalmentContainer">
      <div id="nextInstalmentTitleContainer">
        <h2>Tu próxima cuota</h2>
        <div id="nextInstalmentTitleIcon">
          <img src={nextInstalmentIcon} alt="" />
        </div>
      </div>

      <div id="nextInstalmentContent">
        <h3>${mockNextInstalment.amount} COP</h3>
        <p>Fecha: {mockNextInstalment.deadline}</p>
        <p>Cuotas restantes: {mockNextInstalment.remainingInstallments}</p>
      </div>

      <button>
        Pagar cuota &gt;
      </button>
    </div>
  );
};
