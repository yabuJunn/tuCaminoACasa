import "./BannerStatementOfAcount.css";
// import { UpperNavButtons } from "../upperNavButtons/upperNavButtons";
import BannerStatement from "../../assets/banner-StatementOfAccount/Banner-StatementOfAccount.svg";

const BannerStatementOfAccount = () => {
  return (
    <div id="bannerStatementContainer">
      <img id="bannerStatement" src={BannerStatement} alt="Banner-StatementOfAccount" />
      <div id="statementTextContainer">
        <h1 id="statementTitle">Estado de cuenta</h1>
        <h2 id="statementSubtitle">Resumen</h2>
      </div>
      <div id="statementButtonsContainer">
        {/* <UpperNavButtons /> */}
      </div>
    </div>
  );
};

export default BannerStatementOfAccount;
