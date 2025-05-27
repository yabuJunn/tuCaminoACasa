import "./CalendarStatementOfAccount.css";
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
  <div id="calendar-grid-cell" className={`calendar-cell ${isToday ? "today" : ""}`} onClick={onClick}>
    <strong>{day.getDate()}</strong>
    {event && (
      <div
        id="calendar-event"
        className={`event event-${event.type}`}
      >
        <div id="calendar-event-text">{event.title}</div>
      </div>
    )}
  </div>
);

const CalendarModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <dialog id="calendar-dialog" open>
      <div id="calendar-modal-content">
        <div id="calendar-modal-header">
          <span id="calendar-modal-title" className={`modal-title ${event.type}`}>{event.title}</span>
          <button id="calendar-modal-close" onClick={onClose}>✕</button>
        </div>
        
        {event.type === "cuota" && (
          <div id="calendar-modal-body">
            <div id="calendar-modal-info">
              <p><strong>Fecha</strong> 13 / 04 /2025</p>
              <p><strong>Valor de la cuota</strong> {event.value}</p>
              <p id="calendar-modal-code">{event.code}</p>
            </div>

            <div id="calendar-modal-documents">
              <p id="calendar-modal-file"><i className="icon-file"></i> {event.file}</p>
              <p id="calendar-modal-email"><i className="icon-calendar"></i> {event.email}</p>
            </div>

            <div id="calendar-modal-checkbox">
              <label>
                Hecho <input type="checkbox" defaultChecked={event.done} />
              </label>
            </div>
          </div>
        )}

        <div id="calendar-modal-footer">
          <button id="calendar-modal-save">Guardar</button>
          {event.type === "cuota" && <button id="calendar-modal-pay">Pagar</button>}
        </div>
      </div>
    </dialog>
  );
};

const Calendar = () => {
  const [currentDate] = useState(() => new Date(2025, 4, 1)); // Mayo 2025
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
    <div id="calendar-container" className="calendar-wrapper">
      <div id="calendar-header" className="calendar-header">
        <div id="calendar-title-container">
          <h2 id="calendar-main-title">
            {currentDate.toLocaleDateString("es-ES", {
              month: "long",
              year: "numeric",
            })}
          </h2>
        </div>
        <div id="calendar-view-selector">
          <button className="calendar-view-button">Día</button>
          <button className="calendar-view-button">Semana</button>
          <button className="calendar-view-button active">Mes</button>
          <span id="calendar-subtitle">{currentDate.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}</span>
        </div>
      </div>
      <div id="calendar-grid" className="calendar-grid">
        {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((d) => (
          <div key={d} id="calendar-weekday-label" className="calendar-day-name">{d}</div>
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
