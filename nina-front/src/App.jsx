import React, { useState } from "react";
import Header from "./components/header.jsx";
import Aside from "./components/Aside.jsx";
import InformationTable from "./components/InformationTable.jsx";
import styles from "./App.module.css";
import MuralDeAvisos from "./components/MuralDeAvisos.jsx";

function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="App">
      <div className={styles.container}>
        <Header showCalendar={showCalendar}/>
        <div className={styles.main_content}>
          <Aside onAvisosClick={toggleCalendar} />
          <div className={styles.information_content}>
            <InformationTable />
            {showCalendar ? <MuralDeAvisos/> : <div> </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
