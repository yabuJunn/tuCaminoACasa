import EnviarButton from "../../../assets/svg/chatBot/enviarButton.svg"
import "./enviarBtn.css"

export const EnviarInput = () => {
  return (
    <div className="enviarInputStructure">
      <input type="text" placeholder="Escribe tu pregunta" />
      <button>
        <img src={EnviarButton} alt="Icono" className="enviar" />
      </button>
    </div>

  )
}