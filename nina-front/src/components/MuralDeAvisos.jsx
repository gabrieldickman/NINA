import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import styles from "../modules/MuralDeAvisos.module.css";
import Modal from "./forms/Modal";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [hoveredDay, setHoveredDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const renderDays = () => {
    const startOfMonth = moment(currentDate).startOf("month");
    const endOfMonth = moment(currentDate).endOf("month");
    const today = moment();

    const days = [];
    let currentDay = startOfMonth.clone().startOf("week");

    while (currentDay.isBefore(endOfMonth, "day")) {
      const isToday = currentDay.isSame(today, "day");
      days.push(
        <div
          key={currentDay.format("YYYY-MM-DD")}
          className={`${styles.day} ${isToday ? styles.today : ""}`}
          onClick={() => handleDayClick(currentDay)}
        >
          {currentDay.format("D")}
        </div>
      );
      currentDay.add(1, "day");
    }

    return days;
  };

  const handleDayClick = (day) => {
    // Adicione a lógica para lidar com o clique em um dia, se necessário
    console.log("Clicou em:", day.format("YYYY-MM-DD"));
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  const handleModalSave = () => {
    // Adicione a lógica para salvar as informações do modal
    console.log('Informações do modal:', { title, eventDate, name, content });
    setModalVisible(false);
    // Limpar os estados do modal após salvar, se necessário
    setTitle('');
    setEventDate('');
    setName('');
    setContent('');
  };

  const handleModalCancel = () => {
    // Adicione a lógica para cancelar a edição no modal
    setModalVisible(false);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, "month"));
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h2>{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className={styles.weekdays}>
        <div>Domingo</div>
        <div>Segunda</div>
        <div>Terça</div>
        <div>Quarta</div>
        <div>Quinta</div>
        <div>Sexta</div>
        <div>Sábado</div>
      </div>
      <div className={styles.days}>
        {renderDays()}
        {modalVisible && (
          <div className={styles.modal}>
            <h3>Preencha as informações</h3>
            <label>Título:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Data:</label>
            <input type="text" value={eventDate} readOnly />
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Conteúdo:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.modalButtons}>
              <button onClick={handleModalSave}>Salvar</button>
              <button onClick={handleModalCancel}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
