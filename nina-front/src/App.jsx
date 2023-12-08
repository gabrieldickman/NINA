import React, { useState } from "react";
import Header from "./components/header.jsx";
import Aside from "./components/Aside.jsx";
import styles from "./App.module.css";
import MuralDeAvisos from "./components/MuralDeAvisos.jsx";
import TabelaDeOS from "./components/TabelaDeOS.jsx";

function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };


  const [apiData, setApiData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleApiData = (data, option) => {
    setApiData(data);
    setSelectedOption(option);
  };


  return (
    <div className="App">
      <div className={styles.container}>
        <Header showCalendar={showCalendar} />
        <div className={styles.main_content}>
          <Aside onAvisosClick={toggleCalendar} onApiData={handleApiData} />
          <div className={styles.information_content}>
            {showCalendar ? <MuralDeAvisos /> : <div> </div>}
            { !showCalendar ? <TabelaDeOS apiData={apiData} selectedOption={selectedOption} /> : showCalendar}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
