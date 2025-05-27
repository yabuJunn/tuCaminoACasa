import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar";
import { UpperNavButtons } from "../../components/upperNavButtons/upperNavButtons";
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
        <GlobalNavBar />

        <div id="PQRsHeader">
            <h1>PQR</h1>
            <h2>Diligencie el siguiente formulario para radicar sus solicitudes.</h2>
            <UpperNavButtons></UpperNavButtons>
        </div>

        <div id="PQRsHistory">
            <h1>Historial de PQRs</h1>
            <div id="PQRsHistoryTable">
                <RequestTable />
            </div>
        </div>

        <div id="PQRsForm">
            <h1>Nueva PQRs</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault(); // Evita el envío del formulario
                    openDialog();
                  }}
                >
                    <label htmlFor="Categoria">Categoría</label>
                    <select name="" id="category-PQRs" placeholder="Seleccione una categoría">
                        <option value="1">Reclamo</option>
                        <option value="2">Petición</option>
                        <option value="3">Queja</option>
                    </select>
                    
                    <label htmlFor="Proyecto">Proyecto</label>
                    <select name="" id="project-PQRs" placeholder="Seleccione un proyecto">
                        <option value="1">Violet</option>
                        <option value="2">Pance nativo</option>
                    </select>

                    <label htmlFor="Asunto">Mensaje</label>
                    <input
                      type="text"
                      name="asunto"
                      id="message-PQRs"
                      placeholder="Describe tu solicitud con detalle"
                    />

                    <button type="submit" id="openDialog">
                      Enviar PQRs
                    </button>
                </form>

                <dialog id="dialogPQRs" ref={dialogRef}>
                  <span>
                    Tu solicitud se ha enviado. Por medio del número de radicado podrá hacer
                    seguimiento.
                  </span>
                  <form method="dialog">
                    <button id="closeDialog" onClick={closeDialog}>
                      Cerrar
                    </button>
                  </form>
                </dialog>
        </div>
    </main>
  );
};

export default PQRs;