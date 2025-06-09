import React from "react";
import "./documentStage.css";
import IconPending from "../../../assets/svg/documentScreen/iconPending.svg";
import IconReview from "../../../assets/svg/documentScreen/iconReview.svg";
import IconError from "../../../assets/svg/documentScreen/iconError.svg";
import IconCompleted from "../../../assets/svg/documentScreen/iconCompleted.svg";

const DocumentStage = ({
  title,
  documents,
  active,
  stageNumber,
  onDocumentClick,
}) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return IconPending;
      case "review":
        return IconReview;
      case "completed":
        return IconCompleted;
      case "error":
        return IconError;
      default:
        return IconPending;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Sin subir aún";
      case "review":
        return "En revisión";
      case "completed":
        return "Subido correctamente";
      case "error":
        return "Subido incorrectamente";
      default:
        return "";
    }
  };

  return (
    <section id="documentStage">
      <div className={`document-stage ${active ? "active" : "inactive"}`}>
        <h2 className="stage-title">Etapa {stageNumber}</h2>
        <p className="stage-subtitle">{title}</p>
        <div className="documents-list">
          {documents.map((doc) => (
            <div key={doc.id} className={`document-item ${doc.status}`}>
              <div
                className="document-info-group"
                onClick={() => active && onDocumentClick(doc)}
                style={{ cursor: active ? "pointer" : "default" }}
              >
                <div className="document-content">
                  <img
                    src={getStatusIcon(doc.status)}
                    alt={doc.status}
                    className="status-icon"
                  />
                  <span className="document-name">{doc.name}</span>
                </div>
                <span className="document-status-text">
                  {getStatusText(doc.status)}
                </span>
              </div>

              <button
                className="upload-button"
                onClick={() => onDocumentClick(doc)}
                disabled={
                  (stageNumber !== 1 && !active) || doc.status === "completed"
                }
              >
                {doc.status === "completed" ? "Subido" : "+ Subir documento"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentStage;
