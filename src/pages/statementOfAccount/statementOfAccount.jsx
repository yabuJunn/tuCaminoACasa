import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar";
import { AccruedPayment } from "../../components/accruedPayment/accruedPayment";
import { NextInstalment } from "../../components/nextInstalment/nextInstalment";
import BannerStatementOfAccount from "../../components/BannerStatementOfAccount/BannerStatementOfAcount";
import Calendar from "../../components/CalendarStatementOfAccount/CalendarStatementOfAccount";

const StatementOfAccount = () => {
  return (
    <main className="page" id="statementOfAccountPage">
        <GlobalNavBar />
        
        <div id="statementOfAccountBanner">
            <BannerStatementOfAccount />
        </div>

        <div id="statementOfAccountCalendar">
            <Calendar></Calendar>
        </div>

        <div  id="statementOfAccountCardsGrid">
            <AccruedPayment />
            <NextInstalment />
        </div>
    </main>
  );
};

export default StatementOfAccount;