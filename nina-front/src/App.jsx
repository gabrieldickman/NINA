import React from "react";
import Header from "./components/header.jsx";
import Aside from "./components/Aside.jsx";
import InformationTable from "./components/InformationTable.jsx";


function App() {

  return (
    <div className="App">
      <Header />
      <Aside />
      <InformationTable/>
    </div>
  );
}

export default App;
