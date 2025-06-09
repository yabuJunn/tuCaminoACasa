import React from 'react';
import './documentItem.css';

import IconPending from '../../../assets/svg/documentScreen/iconPending.svg';
import IconReview from '../../../assets/svg/documentScreen/iconReview.svg';
import IconError from '../../../assets/svg/documentScreen/iconError.svg';
import IconCompleted from '../../../assets/svg/documentScreen/iconCompleted.svg';

const getStatusIcon = (status) => {
  switch (status) {
    case 'pending':
      return IconPending;
    case 'review':
      return IconReview;
    case 'error':
      return IconError;
    case 'completed':
      return IconCompleted;
    default:
      return IconPending;
  }
};

const getStatusText = (status) => {
  switch (status) {
    case 'pending':
      return 'Pendiente';
    case 'review':
      return 'En revisión';
    case 'error':
      return 'Incorrecto';
    case 'completed':
      return 'Completado';
    default:
      return 'Desconocido';
  }
};

const DocumentItem = ({ document, disabled, onClick }) => {
  return (
    <div
      className={`document-item ${disabled ? 'disabled' : ''}`}
      onClick={() => !disabled && onClick?.(document)}
    >
      <div className="document-content">
        <span className="document-name">{document.name}</span>
        <div className="document-status">
          <img
            src={getStatusIcon(document.status)}
            alt={`Estado: ${document.status}`}
            className="status-icon"
          />
          <span className="status-text">{getStatusText(document.status)}</span>
        </div>
      </div>
      {!disabled && <button className="upload-btn">Subir</button>}
    </div>
  );
};

export default DocumentItem;
