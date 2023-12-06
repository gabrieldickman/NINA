import React, { useState } from "react";
import Calendar from "../components/Calendar";

function InformationTable (){
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const handleMostrarCalendario = () => {
    setMostrarCalendario(true);
  };

  const handleFecharCalendario = () => {
    setMostrarCalendario(false);
  };

  return (
    <div>
      <h1>Conteúdo Principal</h1>
      <button onClick={handleMostrarCalendario}>Mostrar Calendário</button>

      {mostrarCalendario && <Calendar onClose={handleFecharCalendario} />}
    </div>
  );

}

export default InformationTable