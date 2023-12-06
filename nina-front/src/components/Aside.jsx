import React, { useState } from "react";
import styles from "../modules/Aside.module.css";
import Button from "./forms/Button";
import { GiBigGear } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { RiMegaphoneFill } from "react-icons/ri";
import Calendar from "react-calendar";

function Aside() {

  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const handleAvisosClick = () => {
    setMostrarCalendario(!mostrarCalendario);
  };

  return (
    <div className={styles.wrapper}>

        <div className={styles.title}>
          <p>FILTRAGEM DE O.S</p>
        </div>
        <hr />

      <div className={styles.filtros_de_os}>
        <div className={styles.filtros}>
          <div className={styles.button}>
            <GiBigGear color="black" />
            <Button
              label="DEPARTAMENTO"
              endpoint="chamados"
              options={["conexao", "reincidencia"]}
              wrapInQuotes={false}
            />
          </div>
          <div className={styles.button}>
            <MdEngineering color="black" />
            <Button
              label="TÉCNICO"
              endpoint="chamados/tecnico"
              options={[
                "José Chaves",
                "Gustavo Belém",
                "Tiago Neves",
                "Marcelo Mota",
                "Pablo Mota",
                "Ezequiel",
                "Andersson",
                "Rafel Lisboa",
                "Luiz Eduardo",
                "Bruno Henrique",
                "Reinaldo Vieira",
              ]}
              wrapInQuotes={true}
            />
          </div>
          <div className={styles.button}>
            <MdLocationCity color="black" />
            <Button
              label="CIDADE"
              endpoint="chamados/cidade"
              options={["Porto Velho", "Candeias"]}
              wrapInQuotes={true}
            />
          </div>
          <div className={styles.button}>
            <FaRegClock color="black" />
            <Button
              label="PERIODO"
              endpoint="chamados/periodo"
              options={["Manhã", "Tarde"]}
              wrapInQuotes={true}
            />
          </div>
          <div className={styles.button}>
            <RiMegaphoneFill color="black" />
            <button onClick={handleAvisosClick}>AVISOS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
