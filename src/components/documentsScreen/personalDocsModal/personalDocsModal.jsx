import React, { useState } from 'react';
import UploadModal from './uploadModal';

const PersonalDocsModal = ({ document, onClose, onUpload }) => {
  const [isForeign, setIsForeign] = useState(null);

  const handleSelection = (value) => {
    setIsForeign(value);
  };

  const foreignDocs = {
    ...document,
    name: 'Documentos para extranjeros: Pasaporte, FM3, Comprobante domicilio',
  };

  const localDocs = {
    ...document,
    name: 'Documentos para nacionales: INE y Comprobante domicilio',
  };

  return (
    <div className="upload-modal">
      <div className="popup-content">
        {isForeign === null ? (
          <>
            <h2>¿Eres extranjero?</h2>
            <p>Selecciona una opción para continuar:</p>
            <div className="option-buttons">
              <button onClick={() => handleSelection(true)} className="upload-btn">Sí</button>
              <button onClick={() => handleSelection(false)} className="upload-btn">No</button>
            </div>
          </>
        ) : (
          <UploadModal
            document={isForeign ? foreignDocs : localDocs}
            onClose={onClose}
            onUpload={onUpload}
          />
        )}
      </div>
    </div>
  );
};

export default PersonalDocsModal;
