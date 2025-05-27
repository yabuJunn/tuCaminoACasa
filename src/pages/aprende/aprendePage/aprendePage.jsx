import "./aprendePage.css"

import { AprendeHeader } from "../../../components/aprendeScreen/aprendeHeader/aprendeHeader"
import { ArticulosSection } from "../../../components/aprendeScreen/articulos/articulos"
import { CardsGuia } from "../../../components/aprendeScreen/cardsGuia/cardsGuia"

import { GlobalNavBar } from "../../../components/navigation/globalNavBar/globalNavBar"
import { UpperNavButtons } from "../../../components/navigation/upperNavButtons/upperNavButtons"

export const AprendePage = () => {
  return <>
    <section className="aprendePage">
      <GlobalNavBar></GlobalNavBar>


      <div className="aprendeMargin">
        <div className="headerSection">
          <AprendeHeader />
          <UpperNavButtons />
        </div>


        <h2 className="aprendeTitle">Guía del proceso</h2>

        <div className="guiaSection">
          <CardsGuia></CardsGuia>
        </div>

        <h2 className="aprendeTitle">Últimos artículos </h2>

        <div className="articulosSection">
          <ArticulosSection></ArticulosSection>

        </div>

      </div >

    </section >
  </>
}