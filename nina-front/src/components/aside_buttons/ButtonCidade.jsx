import React from "react";
import styles from "../../modules/Aside.module.css";
import { useState } from "react";
import { MdOutlineLocationCity } from "react-icons/md";


function ButtonCidade(){

  const [open, setOpen] = useState(false);

  const openOptions = () => {
    setOpen(!open);
  };

  return(
    <div className={styles.cidade}>
      <MdOutlineLocationCity size={30}/>
      <button onClick={openOptions}>CIDADE</button>
        {open ? (
          <ul className={styles.cidade_options_list}>
            <li>
              <button>Porto Velho</button>
            </li>
            <li>
              <button>Candeias</button>
            </li>
          </ul>
          ) : null}
    </div>
  )

}

export default ButtonCidade