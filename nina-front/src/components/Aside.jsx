import React from "react";
import styles from "../modules/Aside.module.css";
import { GoAlertFill } from "react-icons/go";

import ButtonDepartamento from "./aside_buttons/ButtonDepartamento";
import ButtonTecnico from "./aside_buttons/ButtonTecnico";
import ButtonCidade from "./aside_buttons/ButtonCidade";
import ButtonPeriodo from "./aside_buttons/ButtonPeriodo";
import ButtonData from "./aside_buttons/ButtonData";

function Aside() {
  return (
    <div className={styles.container}>
      <div className={styles.filtros_de_os}>
        <div className={styles.title}>
          <p>FILTRAGEM DE O.S</p>
          <hr />
        </div>

        <div className={styles.coluna_de_filtros}>
          <div className={styles.filtros}>
            <ButtonDepartamento />

            <ButtonTecnico />

            <ButtonCidade />

            <ButtonPeriodo />

            <ButtonData />

            <div className={styles.avisos}>
              <GoAlertFill size={20} />
              <button>AVISOS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
