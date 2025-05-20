import "./ProjectDescription.css";

import Project3D from "../../assets/jpg/VisualizationProject3D.png";
import IconUbicacion from "../../assets/svg/ubiIcon.svg";
import IconPrecio from "../../assets/svg/payIcon.svg";
import IconArea from "../../assets/svg/areaIcon.svg";
import IconEntrega from "../../assets/svg/calendarIcon.svg";


const projectDescriptionParagraphs = [
  "VIOLET es un proyecto de apartamentos en conjunto cerrado ubicado en la ciudad de Cali, en el sector de Reserva de Kachipay, sobre la calle 60B entre carrera 118 y 118A.",
  "El proyecto cuenta con 6 torres de 12 pisos, sumando 288 viviendas. Ofrece 288 parqueaderos privados (105 descubiertos y 183 cubiertos) y 58 para visitantes, con espacios reservados para personas con movilidad reducida. Entre sus amenidades destacan: portería con lobby y sala de juntas, salón social con turco y piscinas para adultos y niños, gimnasio dotado, zona de juegos infantiles, picnic, mascotas, biciparking y senderos peatonales. Además, dispone de infraestructura técnica como planta eléctrica, tanques de reserva y subestación eléctrica para zonas comunes.",
];

  const highlights = [
    { label: "Ubicación", tipo: "Sur de Cali", value: "Reserva de Kachipay", icon: IconUbicacion },
    { label: "Precio desde", tipo: "Tipo 1", value: "$454.000.000", icon: IconPrecio },
    { label: "Área desde", tipo: "Tipo 1", value: "88,00 m²", icon: IconArea },
    { label: "Entrega estimada", tipo: "Tipo 1", value: "2026", icon: IconEntrega },
  ];

export function ProjectDescription() {
  return (
    <section className="project-description">
      <h2>Descripción del proyecto</h2>

          <p className="intro-paragraph">
        {projectDescriptionParagraphs[0]}
      </p>

      <p className="details-paragraph">
        {projectDescriptionParagraphs[1]}
      </p>

      <div className="project-content-wrapper">
      <div className="project-image">
        <img src={Project3D} alt="Visualización en 3D" />
      </div>

              <div className="projectElementsSide">

          <div className="info-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
  <img src={item.icon} alt={`Icono de ${item.label}`} className="highlight-icon" />
  <div className="text-content">
    <p className="label">{item.label}</p>
    <p className="tipo">{item.tipo}</p>
    <p className="value">{item.value}</p>
  </div>
</div>

            ))}
          </div>

          <div className="amenities-text">
            <h4>Amenidades</h4>
            <p>
              Salón social con turco, gimnasio dotado, piscinas para adultos y niños, juegos infantiles, zona de picnic,
              zona de mascotas, biciparking, senderos peatonales y planta eléctrica para zonas comunes.
            </p>
          </div>
        </div>
      </div>     
    </section>
  );
}
