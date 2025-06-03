import EnviarButton from "../../../assets/svg/chatBot/enviarButton.svg"

export const EnviarInput = () => {
  return (
    <div className="enviarInputStructure">
        <input type="text" placeholder="Escribe tu pregunta"></input>
       <button className="mensajeButton">
       <img src={EnviarButton} alt="Icono" className="enviar" />  
       </button>



    </div>
  )
}