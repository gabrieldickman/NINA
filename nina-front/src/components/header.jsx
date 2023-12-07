import React from "react";
import styles from "../modules/Header.module.css";
import logobd from "../assests/logo-brasil-digital.png";
import { FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

function Header({ showCalendar }) {
  return (
    <>
      <header className={styles.header}>
        {showCalendar ? (
          <>
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

            <div className={styles.title_mural}>
              <p>MURAL DE AVISOS</p>
            </div>
          </>
        ) : (
          <>
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
                  <p>DEPARTAMENTO:</p>
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
          </>
        )}
      </header>
    </>
  );
}

export default Header;
