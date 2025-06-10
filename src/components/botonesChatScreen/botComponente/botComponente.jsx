import { useState } from "react";
import { BotonesChat } from "../botonesChat/botonesChat";
import { EnviarInput } from "../enviarInput/enviarInput";
import chatBotIcon from "../../../assets/svg/chatBot/imgChat.svg";
import "./botCom.css";
import { useSelector } from "react-redux";

export const BotComponente = () => {
  const userStore = useSelector((state) => state.main.user);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

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
              <p><strong>Hola, {userStore.name}!! 👋</strong></p>
              <p className="titleMessage">
                <strong>¿Cómo puedo ayudarte el día de hoy?</strong>
              </p>
              <p className="bodyMessage">
                Obtén respuestas instantáneas sobre tu proyecto, documentos o comunícate con un asesor.
              </p>
              <span className="timestamp">{currentHour}:{currentMinute}</span>
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
