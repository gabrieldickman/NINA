import React from "react";
import styles from "../../modules/Aside.module.css";
import { useState } from "react";

function ButtonPeriodo(){

  const [open, setOpen] = useState(false);

  const openOptions = () => {
    setOpen(!open);
  };

  return(
    <div className={styles.periodo}>
      <button onClick={openOptions}>PERIODO</button>
        {open ? (
          <ul className={styles.periodo_options_list}>
            <li>
              <button>Manhã</button>
            </li>
            <li>
              <button>Tarde</button>
            </li>
          </ul>
          ) : null}
    </div>
  )

}

export default ButtonPeriodo