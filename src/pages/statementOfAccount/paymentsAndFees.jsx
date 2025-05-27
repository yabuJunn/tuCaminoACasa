import { UpperNavButtons } from "../../components/navigation/upperNavButtons/upperNavButtons";

import PaymentsTable from "../../components/PaymentsTable/PaymentsTable";
import arrowLeft from "../../assets/svg/profileScreen/arrow-narrow-left.svg";

const PaymentsAndFees = () => {
    return (
        <main className="page" id="paymentsAndFeesPage">
            <div id="icon-back">
                <img src={arrowLeft} alt="back_page" />
            </div>
            <div id="paymentsAndFeesHeader">
                <h1>Tus pagos</h1>
                <p>Historial de pagos con tu fiducia.</p>
            </div>
            <div id="">
                <UpperNavButtons></UpperNavButtons>
            </div>
            <div id="paymentsAndFeesTableHistory">
                <PaymentsTable />
            </div>

        </main>
    );
};

export default PaymentsAndFees;