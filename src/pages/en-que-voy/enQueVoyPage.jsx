import "./enQueVoyPage.css"

import { GlobalNavBar } from '../../components/navigation/globalNavBar/globalNavBar'

import { ConstructionProgressEnQueVoy } from "../../components/enQueVoyScreen/constructionProgressEnQueVoy/constructionProgressEnQueVoy";
import { ConstructionSteps } from "../../components/enQueVoyScreen/constructionSteps/constructionSteps";
import { ProgressTimeLine } from "../../components/enQueVoyScreen/progressTimeLine/progressTimeLine"

export const EnQueVoyPage = () => {
  return (
    <main className="page" id="enQueVoyPage">
      <GlobalNavBar></GlobalNavBar>

      <div className='page-content'>
        <div className='title'>
          <h2 className='page-title'>¿En qué voy?</h2>
          <p>Mirá ve, el estado actual de tu compra y lo que sigue en el camino a tu nuevo hogar.</p>
        </div>

        <div className='subtitle'>
          <h3>Progreso Postventa</h3>
          <p>Trámites</p>
        </div>

        <section className="progress-timeLine">
          <ProgressTimeLine></ProgressTimeLine>
        </section>

        <div id="construction- progress">
          <h1>Progreso de la construcción</h1>
        </div>

        <div className='progressSection'>
          <section className="construction-progress">
            <ConstructionProgressEnQueVoy></ConstructionProgressEnQueVoy>
          </section>

          <section className="construction-steps">
            <ConstructionSteps></ConstructionSteps>
          </section>
        </div>
      </div>
    </main>
  );
};