import React, { useState } from "react";
import iconUpload from "../../../assets/svg/documentScreen/iconUpload.svg"; // Asegurate de tener este ícono
import "./uploadModal.css";

const UploadModal = ({ document, onClose, onUpload }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setResult(null);
    setProgress(0);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const simulateUpload = () => {
    setUploading(true);
    setProgress(0);
    setResult(null);

    // Mostrar estado "en revisión"
    onUpload(document.id, [], "review");

    let prog = 0;
    const interval = setInterval(() => {
      prog += 10;
      setProgress(Math.min(prog, 100));
    }, 150);

    setTimeout(() => {
      clearInterval(interval);
      const success = Math.random() > 0.2;
      const finalStatus = success ? "completed" : "error";

      setUploading(false);
      setProgress(100);
      setResult(finalStatus);
      onUpload(document.id, files.map(f => ({ name: f.name })), finalStatus);
    }, 1600);
  };

  return (
    <div className="upload-modal">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>✕</button>

        <div className="upload-header">
          <img src={iconUpload} alt="upload icon" />
          <div>
            <h2>Subir documentos</h2>
            <p>Selecciona y sube los documentos requeridos</p>
          </div>
        </div>

        <h3 className="doc-title">{document.name}</h3>

        {document.instructions && (
          <div className="upload-instructions">
            <p>{document.instructions}</p>
          </div>
        )}

        <div className="file-picker-area">
          <img src={iconUpload} alt="icon" />
          <div>
            <label htmlFor="fileUpload">Elija un archivo (PDF)</label>
            <input
              type="file"
              id="fileUpload"
              multiple
              onChange={handleFileChange}
              disabled={uploading}
              accept="application/pdf"
            />
          </div>
        </div>

        {files.length > 0 && (
          <ul className="file-list">
            {files.map((file, i) => (
              <li key={i} className="file-item">
                <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                <button onClick={() => removeFile(i)} className="remove-btn">✕</button>
              </li>
            ))}
          </ul>
        )}

        {uploading && (
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        )}

        <div className="buttons">
          <button onClick={onClose} disabled={uploading}>Cancelar</button>
          <button
            onClick={simulateUpload}
            disabled={files.length === 0 || uploading || result === 'completed'}
          >
            {uploading ? "Subiendo..." : result === "completed" ? "Subido ✓" : "Subir"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
