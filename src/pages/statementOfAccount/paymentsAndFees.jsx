import "./paymentsAndFees.css";

import { UpperNavButtons } from "../../components/navigation/upperNavButtons/upperNavButtons";
import PaymentsTable from "../../components/statementOfAccountScreen/PaymentsTable/PaymentsTable";
import arrowLeft from "../../assets/svg/profileScreen/arrow-narrow-left.svg";

const PaymentsAndFees = () => {
    return (
        <main className="page" id="paymentsAndFeesPage">
            <div id="icon-back">
                <img src={arrowLeft} alt="back_page" />
            </div>
            <div id="paymentsAndFeesHeader">
                <div id="paymentsAndFeesHeaderText">
                    <h1 id="paymentsAndFeesHeaderTitle">Tus pagos</h1>
                    <p id="paymentsAndFeesHeaderSubtitle">Historial de pagos con tu fiducia.</p>
                </div>
            </div>
            <div id="paymentsAndFeesNavButtons">
                <UpperNavButtons></UpperNavButtons>
            </div>
            <div id="paymentsAndFeesTableHistory">
                <PaymentsTable />
            </div>

        </main>
    );
};

export default PaymentsAndFees;