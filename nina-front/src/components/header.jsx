import React from "react"; 
import logobd from "../assests/logo-brasil-digital.png"
import { FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import styles from "../modules/header.module.css"

function Header() {
  return(
    <div className={styles.container}>
     
      <div className={styles.logo}>
        <img src={logobd} alt="Logo Brasil Digital Branca" />
        <div className={styles.info_user_logado}>
          <div className={styles.username}>
          <FaUser />
          <p>GABRIEL DICKMAN</p>
          </div>
          <button><IoLogOutSharp  size={18}/></button>
        </div>
      </div>  

      <header className={styles.header}>  

        <div className={styles.informacoes_da_filtragem}>

          <div className={styles.title}>
            <p>INFORMAÇÕES DA FILTRAGEM</p>
          </div>

          <hr />

          <div className={styles.filtros_selecionados}>

              <div className={styles.item_filtro}>
                <p>DEPARTAMENTO: </p>
              </div>
              <div className={styles.item_filtro}>
                <p>CIDADE: </p>
              </div>
              <div className={styles.item_filtro}>
                <p>DATA: </p>
              </div>
            
              <div className={styles.item_filtro}>
                <p>TÉCNICO: </p>
              </div>
              <div className={styles.item_filtro}>
                <p>PERÍODO: </p>
              </div>
              <div className={styles.item_filtro}>
                <p>RESTRIÇÃO: </p>
              </div>
    
          </div>

        </div>  
          
      </header>

    </div>
  );
}

export default Header;