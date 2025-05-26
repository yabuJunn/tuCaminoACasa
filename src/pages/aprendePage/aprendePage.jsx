import { AprendeHeader } from "../../components/aprendeHeader/aprendeHeader"
import { CardsGuia } from "../../components/cardsGuia/cardsGuia"

export const AprendePage = () => {
	return <>
    <section className="aprendePage">

     <div className="headerSection">
    <AprendeHeader></AprendeHeader>
    </div>

    <h2>Guía del proceso</h2>

      <div className="guiaSection">
    <CardsGuia></CardsGuia>
    </div>
    
       <h2>Últimos artículos </h2>

      <div className="articulosSection">
    </div>

    </section>

       
        
        

	</>
}