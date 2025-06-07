import React from 'react';
import './nationalitySelectorModal.css';

const NationalitySelectorModal = ({ onSelect, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal nationality-selector-modal">
        <h2>¿Eres extranjero o nacional?</h2>
        <div className="button-group">
          <button onClick={() => onSelect('nacional')}>Nacional</button>
          <button onClick={() => onSelect('extranjero')}>Extranjero</button>
        </div>
        <button className="close-btn" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default NationalitySelectorModal;
