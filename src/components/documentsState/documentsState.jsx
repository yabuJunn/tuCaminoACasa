import "./documentsState.css"

import documentAprovedIcon from "../../assets/svg/documentAprovedIcon.svg"
import documentNotUploadIcon from "../../assets/svg/documentNotUploadIcon.svg"

const documentsMock = [
    {
        id: 0,
        name: "Cédula de ciudadanía",
        state: "Aproved"
    },
    {
        id: 1,
        name: "Promesa de compra",
        state: "NotUploaded"
    }
]

export const DocumentsState = () => {
    return <>
        <div id="documentsStateContainer">
            <h2>Estado de tus documentos</h2>

            <div id="documentsStateContent">
                {
                    documentsMock.map((document) => {
                        switch (document.state) {
                            case "Aproved":
                                return <div className="documentState" key={document.id}>
                                    <div className="documentStateIconContainer">
                                        <img src={documentAprovedIcon} alt="" />
                                    </div>

                                    <div className="documentStateIconContainer">
                                        <h3>{document.name}</h3>
                                        <p>Aprobado</p>
                                    </div>
                                </div>
                            case "Pending":
                                return <div className="documentState" key={document.id}>
                                    <div className="documentStateIconContainer">
                                        <img src={documentAprovedIcon} alt="" />
                                    </div>

                                    <div className="documentStateIconContainer">
                                        <h3>{document.name}</h3>
                                        <p>Pendiente</p>
                                    </div>
                                </div>
                            case "NotUploaded":
                                return <div className="documentState" key={document.id}>
                                    <div className="documentStateIconContainer">
                                        <img src={documentNotUploadIcon} alt="" />
                                    </div>

                                    <div className="documentStateIconContainer">
                                        <h3>{document.name}</h3>
                                        <p>Sin subir aún</p>
                                    </div>
                                </div>
                        }
                    })
                }
            </div>
        </div>
    </>
}