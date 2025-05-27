import "./BannerStatementOfAcount.css";

import BannerStatement from "../../../assets/svg/stateOfAccount/Banner-statementOfAccount.svg";

const BannerStatementOfAccount = () => {
  return (
    <div id="bannerStatementContainer">
      <img id="bannerStatement" src={BannerStatement} alt="Banner-StatementOfAccount" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div id="statementTextContainer">
        <div id="statementTextContent">
          <h1 id="statementTitle">Estado de cuenta</h1>
          <h2 id="statementSubtitle">Resumen</h2>
        </div>
      </div>
      <div id="statementButtonsContainer">
        {/* <UpperNavButtons /> */}
      </div>
    </div>
  );
};

export default BannerStatementOfAccount;
