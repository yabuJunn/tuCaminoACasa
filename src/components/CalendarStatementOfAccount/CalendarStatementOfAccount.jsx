import { useState } from "react";

const events = [
  {
    date: "2025-05-01",
    title: "Primera cuota",
    type: "cuota",
    value: "3’000.000",
    code: "A00398291",
    email: "Jaramillo.Mora@hotmail.com",
    file: "Comprobante.pdf",
    done: false,
  },
  {
    date: "2025-05-08",
    title: "Segundo plazo",
    type: "plazo",
  },
  {
    date: "2025-05-20",
    title: "Último plazo",
    type: "plazo",
  },
  {
    date: "2025-05-06",
    title: "Fiducia",
    type: "evento",
  },
  {
    date: "2025-05-12",
    title: "Reunión",
    type: "evento",
  },
];

const formatDate = (date) => date.toISOString().split("T")[0];

const CalendarCell = ({ day, onClick, isToday, event }) => (
  <div className={`calendar-cell ${isToday ? "today" : ""}`} onClick={onClick}>
    <strong>{day.getDate()}</strong>
    {event && <div className={`event ${event.type}`}>{event.title}</div>}
  </div>
);

const CalendarModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className={`modal-header ${event.type}`}>{event.title}</div>
        {event.type === "cuota" && (
          <div className="modal-body">
            <p><strong>Fecha</strong> 13 / 04 /2025</p>
            <p><strong>Valor de la cuota</strong> {event.value}</p>
            <p>{event.code}</p>
            <p><i className="icon-file"></i> {event.file}</p>
            <p><i className="icon-calendar"></i> {event.email}</p>
            <label>
              Hecho <input type="checkbox" defaultChecked={event.done} />
            </label>
          </div>
        )}
        <div className="modal-footer">
          <button onClick={onClose}>Cerrar</button>
          {event.type === "cuota" && <button className="pay-button">Pagar</button>}
        </div>
      </div>
    </div>
  );
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4)); // Mayo 2025
  const [selectedEvent, setSelectedEvent] = useState(null);

  const start = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const days = [];
  for (let i = 1; i <= end.getDate(); i++) {
    const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const event = events.find((e) => e.date === formatDate(day));
    days.push(
      <CalendarCell
        key={i}
        day={day}
        event={event}
        isToday={formatDate(day) === formatDate(new Date())}
        onClick={() => event && setSelectedEvent(event)}
      />
    );
  }

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
          ◀
        </button>
        <span>
          {currentDate.toLocaleDateString("es-ES", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
          ▶
        </button>
      </div>
      <div className="calendar-grid">
        {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((d) => (
          <div key={d} className="calendar-day-name">{d}</div>
        ))}
        {Array(start.getDay() - 1).fill(null).map((_, idx) => (
          <div key={"empty-" + idx} className="calendar-cell empty" />
        ))}
        {days}
      </div>
      <CalendarModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default Calendar;
