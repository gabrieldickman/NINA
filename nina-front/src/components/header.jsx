import React from "react";
import styles from "../modules/Header.module.css";
import logobd from "../assests/logo-brasil-digital.png";
import { FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logobd} alt="Logo Brasil Digital Branca" />
        <div className={styles.info_user_logado}>
          <div className={styles.username}>
            <FaUser />
            <p>GABRIEL DICKMAN</p>
          </div>
          <button>
            <IoLogOutSharp size={18} />
          </button>
        </div>
      </div>

      <div className={styles.informacoes_da_filtragem}>
        <div className={styles.title}>
          <p>INFORMAÇÕES DA FILTRAGEM</p>
          <hr />
        </div>


        <div className={styles.filtros_selecionados}>
          <div className={styles.item_filtro}>
            <p>DEPARTAMENTO: Suporte Técnico - Conexão - Brasil Digital</p>
          </div>
          <div className={styles.item_filtro}>
            <p>CIDADE: Porto Velho </p>
          </div>
          <div className={styles.item_filtro}>
            <p>DATA: 22/13/2023 </p>
          </div>

          <div className={styles.item_filtro}>
            <p>TÉCNICO: José Chaves </p>
          </div>
          <div className={styles.item_filtro}>
            <p>PERÍODO: Manhã </p>
          </div>
          <div className={styles.item_filtro}>
            <p>RESTRIÇÃO: 1</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
