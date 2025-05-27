import "./PQRs.css";

import { GlobalNavBar } from "../../components/navigation/globalNavBar/globalNavBar";
// import { UpperNavButtons } from "../../components/upperNavButtons/upperNavButtons";
import RequestTable from "../../components/historyPQRsTable/historyPQRsTable";
import { useRef } from "react";

const PQRs = () => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal(); // Abre el diálogo
  };

  const closeDialog = () => {
    dialogRef.current.close(); // Cierra el diálogo
  };

  return (
    <main className="Page" id="PQRsPage">
      <div id="pqr-wrapper">
        <GlobalNavBar />

        <div id="pqr-alignment">
          <div id="pqr-content-container">
            <div id="PQRsHeader">
              <h1 id="PQRsTitle">PQR</h1>
              <h2 id="PQRsSubtitle">Diligencie el siguiente formulario para radicar sus solicitudes.</h2>
              <div id="PQRsNavButtons">
                {/* <UpperNavButtons /> */}
              </div>
            </div>

            <div id="PQRsHistory">
              <h1 id="PQRsHistoryTitle">Historial de PQRs</h1>
              <div id="PQRsHistoryTable">
                <RequestTable />
              </div>
            </div>

            <h1 id="PQRsFormTitle">Nueva PQRs</h1>

            <div id="PQRsFormContainer">
              <div id="PQRsForm">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    openDialog();
                  }}
                  id="PQRsFormElement"
                >
                  <div id="PQRsFormInputsContainer">
                    <div className="PQRsFormRow" id="PQRsFormRow">
                      <div className="PQRsFormFieldContainer" id="PQRsFormFieldCategory">
                        <label id="PQRsFormLabelCategory" htmlFor="category-PQRs">Categoría</label>
                        <div className="PQRsInputWrapper">
                          <select id="PQRsFormSelectCategory" >
                            <option value="">Selecciona una categoría</option>
                            <option value="1">Reclamo</option>
                            <option value="2">Petición</option>
                            <option value="3">Queja</option>
                          </select>
                          <span className="PQRsDropdownIcon" id="PQRsDropdownIconCategory">⌄</span>
                        </div>
                      </div>

                      <div className="PQRsFormFieldContainer" id="PQRsFormFieldProject">
                        <label id="PQRsFormLabelProject" htmlFor="project-PQRs">Proyecto</label>
                        <div className="PQRsInputWrapper">
                          <select id="PQRsFormSelectProject" >
                            <option value="">Selecciona tu proyecto</option>
                            <option value="1">Violet</option>
                            <option value="2">Pance nativo</option>
                          </select>
                          <span className="PQRsDropdownIcon" id="PQRsDropdownIconProject">⌄</span>
                        </div>
                      </div>
                    </div>

                    <div className="PQRsFormFieldContainer" id="PQRsFormFieldMessage">
                      <label id="PQRsFormLabelMessage" htmlFor="message-PQRs">Mensaje</label>
                      <div className="PQRsInputWrapper">
                        <textarea
                          id="PQRsFormTextareaMessage"
                          name="asunto"
                          placeholder="Describe tu solicitud con detalle"
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" id="openDialog">Enviar PQR</button>
                </form>

                <dialog id="dialogPQRs" ref={dialogRef}>
                  <span>
                    Tu solicitud se ha enviado. Por medio del número de radicado podrá hacer
                    seguimiento.
                  </span>
                  <form method="dialog">
                    <button id="closeDialog" onClick={closeDialog}>Cerrar</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PQRs;  