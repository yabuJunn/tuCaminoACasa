import React from 'react';
import './nationalitySelectorModal.css';

const NationalitySelectorModal = ({ onSelect, onClose }) => {
  return (
    <section id='nationality-selector-modal'>
    <div className="modal-overlay">
      <div className="modal nationality-selector-modal">
        <button className="close-icon" onClick={onClose}>×</button>
        <h2>¿Eres extranjero o nacional?</h2>
        <div className="button-group">
          <button onClick={() => onSelect('nacional')}>Nacional</button>
          <button onClick={() => onSelect('extranjero')}>Extranjero</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default NationalitySelectorModal;
