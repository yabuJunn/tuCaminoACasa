import { ConstructionProgress } from "../../components/constructionProgress/constructionProgress";
import { ProgressTimeLine } from "../../components/progressTimeLine/progressTimeLine"

export const EnQueVoyPage = () => {
  return (
    <main className="page" id="enQueVoyPage">
      <h2>¿En qué voy?</h2>
      <p>Mirá ve, el estado actual de tu compra y lo que sigue en el camino a tu nuevo hogar.</p>

       <h3>Progreso Postventa</h3>
      <h4>Trámites</h4>
     
      
      <section className="progress-timeLine">
        <ProgressTimeLine></ProgressTimeLine>
      </section>

       <section className="construction-progress">
     <ConstructionProgress></ConstructionProgress>
      </section>
    </main>
  );
};