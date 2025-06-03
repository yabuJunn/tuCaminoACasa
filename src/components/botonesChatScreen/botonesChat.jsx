import mensaje from "../../assets/svg/chatBot/mensaje.svg"

export const BotonesChat =()=>{
    return(
        <div>
            <button className="preguntas">
<img src={mensaje} alt="Icono" className="mensaje" />    
            Preguntas Frecuentes</button>
        </div>
    )
}