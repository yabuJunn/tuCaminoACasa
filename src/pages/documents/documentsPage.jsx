import React, { useState } from "react";
import { GlobalNavBar } from '../../components/navigation/globalNavBar/globalNavBar';
import { UpperNavButtons } from '../../components/navigation/upperNavButtons/upperNavButtons';
import DocumentStage from "../../components/documentsScreen/documentStage/documentStage";
import UploadModal from "../../components/documentsScreen/uploadModal/uploadModal";
import ForeignModal from "../../components/documentsScreen/foreignModal/foreignModal";
import ClientTypeModal from "../../components/documentsScreen/clientTypeModal/clientTypeModal";
import CompletionModal from "../../components/documentsScreen/completionModal/completionModal";
import NationalitySelectorModal from "../../components/documentsScreen/nationalitySelectorModal/nationalitySelectorModal";
import "./documentsPage.css";

const initialStages = [
  {
    title: "Decisión de compra y separación",
    unlocked: true,
    documents: [
      {
        id: "doc1",
        name: "Separación de inmueble (Pago inicial)",
        status: "pending",
        instructions: "• Factura del pago inicial",
      },
      {
        id: "doc2",
        name: "Documentos personales (Identificación y domicilio)",
        status: "pending",
        requiresModal: "foreign",
        instructions: "• Documento de identidad",
      },
      {
        id: "doc3",
        name: "Tipo de cliente o comprador",
        status: "pending",
        requiresModal: "clientType",
      },
    ],
  },
  {
    title: "Evaluación y preaprobación",
    unlocked: false,
    documents: [
      { id: "doc4", name: "Referencias bancarias", status: "locked", instructions: "• Extractos bancarios de los últimos 3 meses" },
      { id: "doc5", name: "Historial crediticio", status: "locked", instructions: "• Reporte de crédito" },
    ],
  },
  {
    title: "Firma de contrato y formalización",
    unlocked: false,
    documents: [
      { id: "doc6", name: "Firma de promesa de compraventa", status: "locked", instructions: "• Documento firmado por ambas partes" },
      { id: "doc7", name: "Comprobante pago inicial", status: "locked", instructions: "• Comprobante del pago inicial realizado" },
    ],
  },
  {
    title: "Solicitud de crédito y autorizaciones",
    unlocked: false,
    documents: [
      {
        id: "doc8",
        name: "Solicitud de crédito hipotecario",
        status: "locked",
        instructions: "• Formulario de solicitud de crédito",
      },
      {
        id: "doc9",
        name: "Contrato definitivo de compraventa",
        status: "locked",
        instructions: "• Documento firmado por ambas partes",
      },
    ],
  },
];

const DocumentsPage = () => {
  const [stages, setStages] = useState(initialStages);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const [showForeignModal, setShowForeignModal] = useState(false);
  const [foreignModalDoc, setForeignModalDoc] = useState(null);

  const [showClientTypeModal, setShowClientTypeModal] = useState(false);
  const [clientTypeModalDoc, setClientTypeModalDoc] = useState(null);

  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const [showNationalitySelector, setShowNationalitySelector] = useState(false);
  const [nationalityDoc, setNationalityDoc] = useState(null);

  const handleOpenUpload = (doc) => {
    setShowForeignModal(false);
    setShowNationalitySelector(false);
    setShowClientTypeModal(false);
    setSelectedDocument(null);

    if (doc.requiresModal === 'foreign') {
      setNationalityDoc(doc);
      setShowNationalitySelector(true);
    } else if (doc.requiresModal === 'clientType') {
      setClientTypeModalDoc(doc);
      setShowClientTypeModal(true);
    } else {
      setSelectedDocument(doc);
    }
  };

  const handleClientTypeModalClose = () => {
    setShowClientTypeModal(false);
    setClientTypeModalDoc(null);
  };

  const handleForeignModalClose = () => {
    setShowForeignModal(false);
    if (foreignModalDoc) setSelectedDocument(foreignModalDoc);
  };

  const handleNationalitySelect = (type) => {
    setShowNationalitySelector(false);

    if (type === 'extranjero') {
      setForeignModalDoc(nationalityDoc);
      setShowForeignModal(true);
    } else {
      setSelectedDocument({ ...nationalityDoc, isNational: true });
    }

    setNationalityDoc(null);
  };

  const handleUpload = (docId, uploadedFiles, statusOverride) => {
    const newStatus = statusOverride || (uploadedFiles.some(f => f.status === 'error') ? 'error' : 'review');

    const updatedStages = stages.map(stage => ({
      ...stage,
      documents: stage.documents.map(doc =>
        doc.id === docId ? { ...doc, status: newStatus, files: uploadedFiles } : doc
      ),
    }));

    const unlockedStages = updatedStages.map((stage, idx) => {
      if (idx === 0) return { ...stage, unlocked: true };
      const prevCompleted = updatedStages[idx - 1].documents.every(d => d.status === 'completed');
      return { ...stage, unlocked: prevCompleted || stage.unlocked };
    });

    const allComplete = unlockedStages.every(stage =>
      stage.documents.every(doc => doc.status === 'completed')
    );

    if (allComplete) setShowCompletionModal(true);

    setStages(unlockedStages);
    setSelectedDocument(null);
  };

  return (
    <div className="documents-page">
      <GlobalNavBar />
      <UpperNavButtons />
      <section id="documentsPageContent">
        <h1 className="page-title">Documentos</h1>
        <p className="page-subtitle">Estado de los documentos por etapa</p>

        {stages.map((stage, idx) => (
          <DocumentStage
            key={idx}
            stageNumber={idx + 1}
            title={stage.title}
            documents={stage.documents}
            active={stage.unlocked}
            onDocumentClick={handleOpenUpload}
          />
        ))}

        {selectedDocument && (
          <UploadModal
            document={selectedDocument}
            onClose={() => setSelectedDocument(null)}
            onUpload={handleUpload}
          />
        )}

        {showNationalitySelector && (
          <NationalitySelectorModal
            onSelect={handleNationalitySelect}
            onClose={() => setShowNationalitySelector(false)}
          />
        )}

        {showForeignModal && (
          <ForeignModal onClose={handleForeignModalClose} />
        )}

        {showClientTypeModal && (
          <ClientTypeModal
            document={clientTypeModalDoc}
            onClose={handleClientTypeModalClose}
            onUpload={handleUpload}
          />
        )}

        {showCompletionModal && (
          <CompletionModal
            onClose={() => setShowCompletionModal(false)}
            onNext={() => setShowCompletionModal(false)}
          />
        )}
      </section>
    </div>
  );
};

export default DocumentsPage;
