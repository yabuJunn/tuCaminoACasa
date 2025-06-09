import React, { useState } from "react";
import iconUpload from "../../../assets/svg/documentScreen/iconUpload.svg";
import iconPdf from "../../../assets/svg/documentScreen/iconPdf.svg";
import "./uploadModal.css";

const UploadModal = ({ document, onClose, onUpload }) => {
  const [files, setFiles] = useState([]); // [{ file, progress, status }]
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map((file) => ({
      file,
      progress: 0,
      status: "pending",
    }));

    const uniqueFiles = [...files, ...newFiles].filter(
      (item, index, self) =>
        index === self.findIndex((f) => f.file.name === item.file.name)
    );

    setFiles(uniqueFiles);
    setResult(null);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const simulateUpload = () => {
    if (files.length === 0) return;

    setUploading(true);
    setResult(null);
    onUpload(document.id, [], "review");

    let updatedFiles = [...files];

    updatedFiles.forEach((fileItem, idx) => {
      setFiles((prev) => {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], status: "uploading", progress: 0 };
        return copy;
      });

      let prog = 0;
      const interval = setInterval(() => {
        prog += 10;
        setFiles((prev) => {
          const copy = [...prev];
          if (copy[idx]) copy[idx].progress = Math.min(prog, 100);
          return [...copy];
        });
      }, 150);

      setTimeout(() => {
        clearInterval(interval);
        const success = Math.random() > 0.2;
        const finalStatus = success ? "completed" : "error";

        setFiles((prev) => {
          const copy = [...prev];
          if (copy[idx]) {
            copy[idx] = { ...copy[idx], status: finalStatus, progress: 100 };
          }
          return copy;
        });

        updatedFiles[idx] = {
          ...updatedFiles[idx],
          status: finalStatus,
          progress: 100,
        };

        if (idx === updatedFiles.length - 1) {
          setUploading(false);
          const anyErrors = updatedFiles.some((f) => f.status === "error");
          const finalResult = anyErrors ? "error" : "completed";
          onUpload(
            document.id,
            updatedFiles.map((f) => ({ name: f.file.name, status: f.status })),
            finalResult
          );
          setResult(finalResult);
        }
      }, 1600 + idx * 200);
    });
  };

  return (
    <section id="upload-modal">
      <div className="popup-content">
        <button className="close-button" onClick={onClose} disabled={uploading}>
          ✕
        </button>

        <div className="upload-header left">
          <img src={iconUpload} alt="upload icon" />
          <div>
            <h2>Subir documentos</h2>
            <p>Selecciona y sube los documentos requeridos</p>
          </div>
        </div>

        <h3 className="doc-title small-left">{document.name}</h3>

        {document.instructions && (
          <div className="upload-instructions">{document.instructions}</div>
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
            {files.map((item, i) => (
              <li key={i} className="file-item">
                <div className="file-info">
                  <img src={iconPdf} alt="PDF" className="pdf-icon" />
                  <div style={{ flex: 1 }}>
                    <span className="file-name">{item.file.name}</span>
                    <span className="file-size">
                      {(item.file.size / 1024).toFixed(1)} KB
                    </span>

                    {/* Progreso visible si aún no terminó */}
                    {item.progress > 0 && item.progress < 100 && (
                      <div className="progress-bar small">
                        <div
                          className="progress-fill"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => removeFile(i)}
                  className="remove-btn"
                  disabled={uploading}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="buttons">
          <button onClick={onClose} disabled={uploading}>
            Cancelar
          </button>
          <button
            onClick={simulateUpload}
            disabled={files.length === 0 || uploading || result === "completed"}
          >
            {uploading
              ? "Subiendo..."
              : result === "completed"
              ? "Subido"
              : "Subir"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadModal;
