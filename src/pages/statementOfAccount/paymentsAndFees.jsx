import { UpperNavButtons } from "../../components/upperNavButtons/upperNavButtons";
import PaymentsTable from "../../components/PaymentsTable/PaymentsTable";

const PaymentsAndFees = () => {
  return (
    <main className="page" id="paymentsAndFeesPage">
        <div id="icon-back">
            <img src="#" alt="" />
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