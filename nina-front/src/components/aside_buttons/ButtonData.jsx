import React from "react";
import styles from "../../modules/Aside.module.css";
import { FaCalendarAlt } from "react-icons/fa";


function ButtonData(){

  return(
    <div className={styles.data}>
      <FaCalendarAlt size={20} />
      <button >DATA</button>
    </div>
  )

}

export default ButtonData