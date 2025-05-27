import "./statementOfAccount.css";
import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar";
import { AccruedPayment } from "../../components/accruedPayment/accruedPayment";
import { NextInstalment } from "../../components/nextInstalment/nextInstalment";
import BannerStatementOfAccount from "../../components/BannerStatementOfAccount/BannerStatementOfAcount";
import Calendar from "../../components/CalendarStatementOfAccount/CalendarStatementOfAccount";

const StatementOfAccount = () => {
  return (
    <main className="page" id="statementOfAccountPage">
      <GlobalNavBar />

      <div id="statementOfAccountContent">
        <div id="statementOfAccountBanner">
          <BannerStatementOfAccount />
        </div>

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
      </div>
    </main>
  );
};

export default StatementOfAccount;