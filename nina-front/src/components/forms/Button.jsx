// Button.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../modules/forms/Button.module.css';

const Button = ({ label, endpoint, options, wrapInQuotes }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [apiData, setApiData] = useState(null);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = async (option) => {
    try {
      let formattedOption = option;

      if (endpoint === 'chamados/periodo') {
        formattedOption = wrapInQuotes ? `"${option === 'Manhã' ? 'M' : 'T'}"` : option;
      } else {
        formattedOption = wrapInQuotes ? `"${option}"` : option;
      }

      const url = `http://localhost:442/${endpoint}/${encodeURIComponent(formattedOption)}`;
      const response = await axios.get(url);
      setApiData(response.data);
      setSelectedOption(option);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleButtonClick}>{label}</button>
      {showOptions && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
      {selectedOption && (
        <div className="data-display">
          <p>Dados obtidos da API para {selectedOption}:</p>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Button;
