import { AprendeHeader } from "../../components/aprendeHeader/aprendeHeader"
import { GuiaCards } from "../../components/guiasCards/guiasCards"

export const AprendePage = () => {
	return <>
    <section className="aprendePage">

     <div className="headerSection">
    <AprendeHeader></AprendeHeader>
    </div>

    <h2>Guía del proceso</h2>

      <div className="guiaSection">
    <GuiaCards></GuiaCards>
    </div>


    </section>

       
        
        

	</>
}