import React from "react";
import "./documentStage.css";
import IconPending from '../../../assets/svg/documentScreen/iconPending.svg';
import IconReview from '../../../assets/svg/documentScreen/iconReview.svg';
import IconError from '../../../assets/svg/documentScreen/iconError.svg';
import IconCompleted from '../../../assets/svg/documentScreen/iconCompleted.svg';

const DocumentStage = ({ title, documents, active, stageNumber, onDocumentClick }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return IconPending;
      case 'review': return IconReview;
      case 'completed': return IconCompleted;
      case 'error': return IconError;
      default: return IconPending;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return "Sin subir aún";
      case 'review': return "En revisión";
      case 'completed': return "Subido correctamente";
      case 'error': return "Subido incorrectamente";
      default: return "";
    }
  };

  return (
    <div className={`document-stage ${active ? "active" : "inactive"}`}>
      <h2 className="stage-title">{title}</h2>
      <div className="documents-list">
        {documents.map((doc) => (
          <div key={doc.id} className={`document-item ${doc.status}`}>
            <div
              className="document-content"
              onClick={() => active && onDocumentClick(doc)}
              style={{ cursor: active ? "pointer" : "default" }}
            >
              <img
                src={getStatusIcon(doc.status)}
                alt={doc.status}
                className="status-icon"
              />
              <span className="document-name">{doc.name}</span>
              <span className="document-status-text">{getStatusText(doc.status)}</span>
            </div>
            <button
              className="upload-button"
              onClick={() => onDocumentClick(doc)}
              disabled={(stageNumber !== 1 && !active) || doc.status === "completed"}
            >
              {doc.status === "completed" ? "Subido" : "+ Subir documento"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentStage;
