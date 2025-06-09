import React, { useState } from "react";
import UploadModal from "../uploadModal/uploadModal";
import "./clientTypeModal.css";

const ClientTypeModal = ({ document, onClose, onUpload }) => {
  const [clientType, setClientType] = useState(null);

  const handleSelection = (type) => {
    setClientType(type);
  };

  // Documentos según tipo de cliente
  const dependentDocs = {
    ...document,
    name: "• Carta laboral (no mayor a 30 días) - Certificado de ingresos y retenciones - Declaración de renta (Si declara)",
  };

  const independentDocs = {
    ...document,
    name: "• Rut - Cámara de comercio - Declaración de renta - Certificado de ingresos y retenciones",
  };

  const selectedDoc = clientType === "dependent" ? dependentDocs : independentDocs;

  return (
    <section id="client-type-modal">
    <div className="upload-modal">
      <div className="popup-content">
        <button className="close-icon" onClick={onClose}>×</button>
        {clientType === null ? (
          <>
            <h2>¿Eres cliente dependiente o independiente?</h2>
            <div className="option-buttons">
              <button onClick={() => handleSelection("dependent")} className="upload-btn">
                Dependiente
              </button>
              <button onClick={() => handleSelection("independent")} className="upload-btn">
                Independiente
              </button>
            </div>
          </>
        ) : (
          <UploadModal
            document={selectedDoc}
            onClose={onClose}
            onUpload={onUpload}
          />
        )}
      </div>
    </div>
    </section>
  );
};

export default ClientTypeModal;
