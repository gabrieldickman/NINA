import React from "react";
import styles from "../../modules/Aside.module.css";
import { useState } from "react";
import { MdEngineering } from "react-icons/md";


function ButtonTecnico() {
  const [open, setOpen] = useState(false);

  const openOptions = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.tecnico}>
      <MdEngineering size={30}/>
      <button onClick={openOptions}>TÉCNICO</button>
      {open ? (
        <ul className={styles.tecnico_options_list}>
          <li>
            <button>José Chaves</button>
          </li>
          <li>
            <button>Gustavo Belém</button>
          </li>
          <li>
            <button>Tiago Neves</button>
          </li>
          <li>
            <button>Marcelo Mota</button>
          </li>
          <li>
            <button>Pablo Mota</button>
          </li>
          <li>
            <button>Ezequiel Gomes</button>
          </li>
          <li>
            <button>Andersson Costa</button>
          </li>
          <li>
            <button>Rafael Lisboa</button>
          </li>
          <li>
            <button>Luiz Eduardo</button>
          </li>
          <li>
            <button>Bruno Henrique</button>
          </li>
          <li>
            <button>Reinaldo Vieiera</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default ButtonTecnico;
