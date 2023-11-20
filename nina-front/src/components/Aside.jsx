import React from "react";
import styles from "../modules/Aside.module.css";


function Aside(){

  return(
    <div className={styles.container}>
      
      <div className={styles.filtros_de_os}>

        <div className={styles.title}>
          <p>FILTRAGEM DE O.S</p>
        </div>

        <hr />

        <div className={styles.coluna_de_filtros}>

          <div className={styles.departamento}>
            <button>DEPARTAMENTO</button>
          </div>

          <div className={styles.tecnico}>
            <button>TÉCNICO</button>
          </div>

          <div className={styles.cidade}>
            <button>CIDADE</button>
          </div>

          <div className={styles.periodo}>
            <button>PERIODO</button>
          </div>

          <div className={styles.data}>
            <button>DATA</button>
          </div>

          <div className={styles.aviso}>
            <button>AVISOS</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Aside;