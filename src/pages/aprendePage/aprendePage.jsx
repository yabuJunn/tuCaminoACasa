import { AprendeHeader } from "../../components/aprendeHeader/aprendeHeader"
import { ArticulosSection } from "../../components/articulos/articulos"
import { CardsGuia } from "../../components/cardsGuia/cardsGuia"
import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar"

export const AprendePage = () => {
	return <>
    <section className="aprendePage">
            <GlobalNavBar></GlobalNavBar>
    

     <div className="headerSection">
    <AprendeHeader></AprendeHeader>
    </div>

    <h2>Guía del proceso</h2>

      <div className="guiaSection">
    <CardsGuia></CardsGuia>
    </div>
    
       <h2>Últimos artículos </h2>

      <div className="articulosSection">
            <ArticulosSection></ArticulosSection>

    </div>

    </section>

       
        
        

	</>
}