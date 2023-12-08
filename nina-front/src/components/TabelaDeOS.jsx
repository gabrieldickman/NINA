import React from "react";
import styles from "../modules/Tabela.module.css";

function TabelaDeOS({ apiData, selectedOption }) {

  if (!apiData || apiData.length === 0) {
    return (
      <div className={styles.loader}>
        <p>Aguardando dados do IXC...</p>
        <div className={styles.loader_icon}></div>
      </div>
    );
  }

  const rows = apiData.map((item) => (
    <tr key={item.new_id}>
      <td>{item.id_os}</td>
      <td>{item.status}</td>
      <td>{item.client_id}</td>
      <td>{item.data_agenda}</td>
      <td>{item.tecnico}</td>
      <td>{item.setor}</td>
      <td>{item.melhor_horario_agenda}</td>
      <td>{item.localidade}</td>
    </tr>
  ));

  return (
    <div className={styles.tabela}>
      {selectedOption && (
        <>
          <table>
            <thead>
              <tr>
                <th>ID OS</th>
                <th>Status</th>
                <th>Cliente</th>
                <th>Data de Agendamento</th>
                <th>Técnico</th>
                <th>Departamento</th>
                <th>Periodo</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default TabelaDeOS;
