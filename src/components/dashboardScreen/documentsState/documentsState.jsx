import "./documentsState.css";

import documentAprovedIcon from "../../../assets/svg/dashboardScreen/documentAprovedIcon.svg";
import documentNotUploadIcon from "../../../assets/svg/dashboardScreen/documentNotUploadIcon.svg";

const documentsMock = [
    {
        id: 0,
        name: "Cédula de ciudadanía",
        state: "Aproved",
    },
    {
        id: 1,
        name: "Promesa de compra",
        state: "NotUploaded",
    },
];

export const DocumentsState = () => {
    return (
        <div id="documentsStateContainer">
            <h2>Estado de los documentos</h2>

            <div id="documentsStateContent">
                {documentsMock.map((document, index) => {
                    const isLast = index === documentsMock.length - 1;
                    const icon =
                        document.state === "Aproved"
                            ? documentAprovedIcon
                            : documentNotUploadIcon;
                    const statusText =
                        document.state === "Aproved"
                            ? "Subido correctamente"
                            : "Sin subir aún";
                    const lineColor = document.state === "Aproved" ? "#01C764" : "#F5B300";

                    return (
                        <div className="documentState" key={document.id}>
                            <div
                                className="documentStateIcon"
                                style={{
                                    backgroundColor: document.state === "Aproved" ? "#01C764" : "#F5B300"
                                }}
                            >
                                <img src={icon} alt="" />
                                {!isLast && (
                                    <div
                                        className="documentStateLine"
                                        style={{ backgroundColor: lineColor }}
                                    />
                                )}
                            </div>

                            <div className="documentStateText">
                                <h3>{`Documento n°${12 + index}`}</h3>
                                <p>{statusText}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button>
                <span style={{ fontSize: "16px" }}>＋</span> Subir documento
            </button>
        </div>
    );
};
