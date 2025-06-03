import "./desNoticias.css"
import bannerAprendeNoticias from "../../../assets/svg/aprendeScreen/ImgBannerAprende/bannerAprendeNoticias.svg"

export const DescripcionNoticias = () => {
    return <>

        <section className="aprendeNoticiasDescripcion">

            <h3 className="fechaAprendeNoticias"> 7 de julio, 2025</h3>
            <h1 className="pageNoticiasTitle">Lo que debe saber del nuevo subsidio a tasa para viviendas clase media</h1>
            <h2 className="pageNoticiasSubtitle">Cubre rango entre $ 130 y $ 440 millones. De 100.000 coberturas, 60.000 son para primera vivienda.</h2>
            <p className="pageNoticiasDescripcion">El Gobierno, a través del decreto 1233, expedido este lunes por el Ministerio de Hacienda, asignó 100.000
                coberturas de tasa de interés (subsidio a la tasa) para créditos hipotecarios y operaciones de leasing habitacional, otorgados por entidades
                financieras y cajas de compensación familiar, para compra de vivienda nueva no VIS de hasta 500 salarios mínimos (438 millones de pesos en 2020).
                Le puede interesar: Pese a la pandemia, aumenta la venta de vivienda nueva en el país De acuerdo con la norma, que dispone de los recursos del Fondo
                de Reserva para la Estabilización de la Cartera Hipotecaria (Frech), estas coberturas están disponibles hasta diciembre de 2022 o hasta que se agoten las existencias.</p>

                <img src={bannerAprendeNoticias} alt="bannerAprendeNoticias" />

                <p>Con ello los beneficiarios de los subsidios no VIS a la tasa de interés recibirán mensualmente cerca de 439.000 pesos 
                    durante los primeros 7 años del crédito, lo que equivale a un subsidio total de más de 36 millones de pesos, 42 
                    salarios mínimos, para que más familias puedan hacer realidad el sueño de tener casa propia. El ministro de Vivienda, 
                    Jonathan Malagón, explicó que para acceder a este programa las personas interesadas no deben haber recibido subsidio 
                    familiar de vivienda por parte del Gobierno y/o las cajas de compensación familiar, ni ninguna cobertura de tasa de 
                    interés en el pasado. Para la postulación al mecanismo, el comprador interesado debe hacerla a través de la entidad 
                    bancaria de su preferencia al momento de solicitar un crédito hipotecario o leasing habitacional.</p>
        </section>
    </>
}