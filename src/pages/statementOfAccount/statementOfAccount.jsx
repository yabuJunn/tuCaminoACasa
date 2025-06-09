import "./statementOfAccount.css";

import { GlobalNavBar } from "../../components/navigation/globalNavBar/globalNavBar";
import { AccruedPayment } from "../../components/dashboardScreen/accruedPayment/accruedPayment";
import { NextInstalment } from "../../components/dashboardScreen/nextInstalment/nextInstalment";

import BannerStatementOfAccount from "../../components/statementOfAccountScreen/BannerStatementOfAccount/BannerStatementOfAcount";
import Calendar from "../../components/statementOfAccountScreen/CalendarStatementOfAccount/CalendarStatementOfAccount";

const StatementOfAccount = () => {
  return (
    <main className="page full-page-height" id="statementOfAccountPage">
      <GlobalNavBar />

      {/* <div id="statementOfAccountBanner">
        <BannerStatementOfAccount />
      </div> */}

      <h2 className='page-title-statement-account'>Estado de Cuenta</h2>

      <div id="statementOfAccountCards" className="dashboardCard">
        <div id="statementContentColumn1">
          <Calendar />
        </div>

        <div id="statementContentColumn2">
          <div id="statementCardsGrid">
            <div id="accruedPaymentCard">
              <AccruedPayment />
            </div>
            <div id="nextInstalmentCard">
              <NextInstalment />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatementOfAccount;