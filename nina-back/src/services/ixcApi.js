// require('dotenv').config();

// let request = require("request");
// let token = process.env.TOKEN_BD;
// let options = { method: 'GET',
//   url: 'https://ixc.brasildigital.net.br/webservice/v1/su_oss_chamado',
//   headers:
//    {
//      'Content-Type': 'application/json',
//      Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
//      ixcsoft: 'listar'
//    },
//   body:
//    { qtype: 'su_oss_chamado.id',
//      query: '0',
//      oper: '>',
//      page: '1',
//      rp: '20',
//      sortname: 'su_oss_chamado.id',
//      sortorder: 'desc'
//    },
//   json: true
//   };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });