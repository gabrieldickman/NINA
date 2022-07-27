const express = require('express');

const app = express();

/*Para acessar o sistema localmente, abra o terminal, navegue até a pasta src e execute o comando node app e depois digite no navegador: "localhost:3333"*/
app.listen(3333, () => console.log('Servidor rodando...'));

