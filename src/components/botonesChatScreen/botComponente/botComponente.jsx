import { useState } from "react";
import { BotonesChat } from "../botonesChat/botonesChat";
import { EnviarInput } from "../enviarInput/enviarInput";
import chatBotIcon from "../../../assets/svg/chatBot/imgChat.svg"; 
import "./botCom.css";

export const BotComponente = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="chatBotFloatButton" onClick={toggleModal}>
        <img src={chatBotIcon} alt="Bot" />
      </button>

      {isOpen && (
        <div className="chatModal">
          <div className="chatHeader">
            <span>Hoy 10:30 am</span>
          </div>

          <div className="chatBubble">
            <img src={chatBotIcon} alt="Bot" className="botAvatar" />
            <div className="chatMessage">
              <p><strong>Hola, Salome!! 👋</strong></p>
              <p className="titleMessage">
                <strong>¿Cómo puedo ayudarte el día de hoy?</strong>
              </p>
              <p className="bodyMessage">
                Obtén respuestas instantáneas sobre tu proyecto, documentos o comunícate con un asesor.
              </p>
              <span className="timestamp">10:30 am</span>
            </div>
          </div>

          <div className="chatButtons">
            <BotonesChat />
          </div>

          <EnviarInput />
        </div>
      )}
    </>
  );
};
