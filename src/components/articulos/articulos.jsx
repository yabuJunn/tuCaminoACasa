import articuloIcon from "../../assets/articulosCardsIcon/articulo.svg"

export const ArticulosSection =({ icon, title, description })=>{
    return(
        <div className="articulosCards">

        <div  className="noticia">
            <img src={articuloIcon} alt="articuloIcon" />
        <h3 className="cardArticleTitle">Lo que debe saber del nuevo subsidio...</h3>
        <h3>Noticia</h3>
        <p className="cardArticleDescription">Desarrollo de proyectos que priorizan la
            biodiversidad y el bienestar comunitario, integrando diseño bioclimático y espacios verdes.</p>
        <button className="cardGuiaButton"> Ver más  
              <span className="span">&#8250;</span> {}
        </button>
        </div>

        
        <div  className="noticia">
            <img src={articuloIcon} alt="articuloIcon" />
        <h3 className="cardArticleTitle">Entrega de viviendas en Jamundí</h3>
        <h3>Noticia</h3>
        <p className="cardArticleDescription">Jaramillo Mora celebró la entrega de
             dos proyectos de vivienda en Jamundí, destacando su compromiso con el progreso regional. </p>
        <button className="cardGuiaButton"> Ver más  
              <span className="span">&#8250;</span> {}
        </button>
        </div>

          <div  className="noticia">
            <img src={articuloIcon} alt="articuloIcon" />
        <h3 className="cardArticleTitle">Reactivación del programa Mi Casa Ya</h3>
        <h3>Noticia</h3>
        <p className="cardArticleDescription">Jaramillo Mora celebró la entrega de
             dos proyectos de vivienda en Jamundí, destacando su compromiso con el progreso regional. </p>
        <button className="cardGuiaButton"> Ver más  
              <span className="span">&#8250;</span> {}
        </button>
        </div>

        

        
    </div>

    )
}