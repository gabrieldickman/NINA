import React from "react";
import styles from "../../modules/Aside.module.css";
import { useState } from "react";

function ButtonDepartamento(){

  const [open, setOpen] = useState(false);

  const openOptions = () => {
    setOpen(!open);
  };

  return(
    <div className={styles.departamento}>
      <button onClick={openOptions}>DEPARTAMENTO</button>
        {open ? (
          <ul className={styles.departamento_options_list}>
            <li>
              <button>Conexão</button>
            </li>
            <li>
              <button>Reincidência</button>
            </li>
          </ul>
          ) : null}
    </div>
  )

}

export default ButtonDepartamento