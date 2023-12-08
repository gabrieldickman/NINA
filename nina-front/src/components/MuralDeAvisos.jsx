import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import styles from "../modules/MuralDeAvisos.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [reminders, setReminders] = useState([]);
  const [editingReminder, setEditingReminder] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day.clone());
    setEditingReminder(null);
    if (editingReminder) {
      handleEditReminder();
    }
  };

  const handleReminderSave = () => {
    const newReminder = {
      title,
      name,
      content,
      date: selectedDay.format("DD-MM-YYYY"),
    };

    if (editingReminder) {
      const updatedReminders = reminders.map((reminder) =>
        reminder === editingReminder ? newReminder : reminder
      );
      setReminders(updatedReminders);
    } else {
      setReminders([...reminders, newReminder]);
    }

    setTitle("");
    setName("");
    setContent("");
    setSelectedDay(null);
    setEditingReminder(null);
  };

  const handleEditReminder = (reminder) => {
    if (reminder) {
      setTitle(reminder.title);
      setName(reminder.name);
      setContent(reminder.content);
      setSelectedDay(moment(reminder.date, "DD-MM-YYYY"));
      setEditingReminder(reminder);
    }
  };

  const handleDeleteReminder = (reminder) => {
    const updatedReminders = reminders.filter((r) => r !== reminder);
    setReminders(updatedReminders);
  };

  const handleCancel = () => {
    setTitle("");
    setName("");
    setContent("");
    setSelectedDay(null);
    setEditingReminder(null);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, "month"));
  };

  const renderDays = () => {
    const startOfMonth = moment(currentDate).startOf("month");
    const endOfMonth = moment(currentDate).endOf("month");
    const today = moment();

    const days = [];
    let currentDay = startOfMonth.clone().startOf("week");

    while (currentDay.isBefore(endOfMonth, "day")) {
      const isToday = currentDay.isSame(today, "day");
      const dayClone = currentDay.clone();

      days.push(
        <div
          key={dayClone.format("YYYY-MM-DD")}
          className={`${styles.day} ${isToday ? styles.today : ""}`}
          onClick={() => handleDayClick(dayClone)}
        >
          {dayClone.format("D")}
          {renderRemindersForDay(dayClone)}
        </div>
      );

      currentDay.add(1, "day");
    }

    return days;
  };

  const renderRemindersForDay = (day) => {
    const dayReminders = reminders.filter((reminder) =>
      moment(reminder.date, "DD-MM-YYYY").isSame(day, "day")
    );

    return dayReminders.map((reminder, index) => (
      <div key={index} className={styles.reminder}>
        {reminder.title}
        <div className={styles.reminder_buttons}>
          <button onClick={() => handleEditReminder(reminder)}>Editar</button>
          <button onClick={() => handleDeleteReminder(reminder)}>
            Excluir
          </button>
        </div>
      </div>
    ));
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
      <div className={styles.days}>{renderDays()}</div>
      {selectedDay && <div className={styles.modal}>
        <div className={styles.modal_infos}>
          <div className={styles.modal_title}>
            <h3>{editingReminder ? "EDITAR AVISO" : "NOVO AVISO"}</h3>
          </div>
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {selectedDay && <label>{selectedDay.format("DD/MM/YYYY")}</label>}
          <label>Técnico</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Mensagem</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className={styles.modalButtons}>
            <button onClick={handleReminderSave}>
              {editingReminder ? "Salvar" : "Criar"}
            </button>
            <button onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Calendar;
