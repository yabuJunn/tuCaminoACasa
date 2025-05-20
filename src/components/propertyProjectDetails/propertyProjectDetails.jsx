import "./propertyProjectDetails.css"

import buildingIcon from "../../assets/svg/buildingIcon.svg"
import starListIcon from "../../assets/svg/starListIcon.svg"

const projectMock = {
    title: "Violet",
    location: "Sur de Cali",
    type: "Apartamento",
    class: "1",
    state: "Obra Gris",
    size: "88,00 m2",
    elements: [
        "Cocina",
        "Alcoba 1",
        "Sala Comedor",
        "Estudio",
        "Terraza",
        "Baño alcoba principal",
        "Baño alcobas",
        "Vestier",
        "Espacio flexible",
        "Zona de ropas",
        "Balcón"
    ]
}

export const PropertyProjectDetails = () => {
    return <>
        <div id="propertyProjectDetailsContainer">
            <div id="propertyProjectDetailsTitleContainer">
                <h2>Detalles de tu Proyecto</h2>
                <div id="propertyProjectDetailsTitleIcon">
                    <img src={buildingIcon} alt="" />
                </div>
            </div>

            <p>Área privada construida total {projectMock.size}</p>

            <div id="propertyProjectDetailsDescription">
                {projectMock.elements.map((element) => {
                    return <>
                        <div className="propertyProjectDetailsDescriptionElement">
                            <img src={starListIcon} alt="" />
                            <p>{element}</p>
                        </div>
                    </>
                })}
            </div>
        </div>
    </>
}