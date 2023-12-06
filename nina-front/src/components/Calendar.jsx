import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';

function Calendar({ onClose }) {
  const [eventos, setEventos] = useState([]);
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [textoEvento, setTextoEvento] = useState("");

  const handleDayClick = (date) => {
    setDataSelecionada(date);
  };

  const adicionarEvento = () => {
    const novoEvento = {
      data: dataSelecionada,
      texto: textoEvento,
    };

    setEventos([...eventos, novoEvento]);
    onClose(); 
  };

  return (
    <div>
      <h1>Calendário</h1>
      <Calendar
        onClickDay={handleDayClick}
        tileContent={({ date }) => {
          const eventosDoDia = eventos.filter(
            (evento) =>
              evento.data.toDateString() === date.toDateString()
          );
          return eventosDoDia.map((evento, index) => (
            <div key={index}>{evento.texto}</div>
          ));
        }}
      />

      <div>
        <h2>Adicionar Evento</h2>
        <input
          type="text"
          value={textoEvento}
          onChange={(e) => setTextoEvento(e.target.value)}
        />
        <button onClick={adicionarEvento}>Adicionar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default Calendar;
