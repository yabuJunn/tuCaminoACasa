// components/documentsScreen/foreignModal/ForeignModal.jsx
import React, { useState } from "react";
import "./foreignModal.css"; // si usas CSS separado

const ForeignModal = ({ onClose, onSubmit }) => {
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [additionalFile, setAdditionalFile] = useState(null);

  const handleFileChange = (e) => {
    setAdditionalFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (country && visaType && entryDate) {
      onSubmit({ country, visaType, entryDate, additionalFile });
      onClose();
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  };

  return (
    <section id="modal-overlay">
      <div className="modal foreign-modal">
        <h2>Información para usuarios extranjeros</h2>
        <label>
          País de origen:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          Tipo de visa:
          <input
            type="text"
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
          />
        </label>
        <label>
          Fecha de entrada al país:
          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
          />
        </label>
        <label>
          Documento adicional:
          <label htmlFor="fileUpload" className="file-upload-label">
            Seleccionar archivo
          </label>
          <input type="file" id="fileUpload" onChange={handleFileChange} />
        </label>

        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default ForeignModal;
