import { progressTimeline } from "../../components/progressTimeLine/progressTimeLine";

export const EnQueVoyScreen = () => {
  return (
    <main className="page" id="enQueVoyPage">
      <h2>¿En qué voy?</h2>
      <p>Mirá ve, el estado actual de tu compra y lo que sigue en el camino a tu nuevo hogar.</p>

       <h3>Progreso Postventa</h3>
      <h4>Trámites</h4>
     
      
      <section>
        <progressTimeline />
      </section>
      
      <section className="progress-section">
        <ConstructionGallery />
        <ConstructionStages />
      </section>
    </main>
  );
};