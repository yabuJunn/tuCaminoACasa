import React from 'react';
import './completionModal.css';

const CompletionModal = ({ onClose, onNext }) => {
  return (
    <div className="upload-modal">
      <div className="popup-content">
        <h2>¡Documentación completa!</h2>
        <p>Has subido todos los documentos correctamente. Ahora puedes continuar con el siguiente paso del proceso.</p>
        <div className="buttons">
          <button className="cancel-btn" onClick={onClose}>Cerrar</button>
          <button className="upload-btn" onClick={onNext}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;
