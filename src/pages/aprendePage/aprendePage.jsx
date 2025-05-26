import { AprendeHeader } from "../../components/aprendeHeader/aprendeHeader"
import { ArticulosSection } from "../../components/articulos/articulos"
import { CardsGuia } from "../../components/cardsGuia/cardsGuia"
import { GlobalNavBar } from "../../components/globalNavBar/globalNavBar"
import { UpperNavButtons } from "../../components/upperNavButtons/upperNavButtons"
import "./aprendePage.css"

export const AprendePage = () => {
  return <>
    <section className="aprendePage">
      <GlobalNavBar></GlobalNavBar>


<div className="aprendeMargin">
      <div className="headerSection">
        <AprendeHeader />
        <UpperNavButtons />
      </div>


      <h2>Guía del proceso</h2>

      <div className="guiaSection">
        <CardsGuia></CardsGuia>
      </div>

      <h2>Últimos artículos </h2>

      <div className="articulosSection">
        <ArticulosSection></ArticulosSection>

      </div>

</div>

    </section>
  </>
}