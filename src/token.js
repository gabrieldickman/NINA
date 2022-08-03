let request = require("request");
let token = '218:a5a6281c41550a5b567b94fde305fafa7e7a0cb8a6aed39ddec9ea9284e190ca';
let options = { method: 'GET',
  url: 'https://ixc.brasildigital.net.br/webservice/v1/su_oss_chamado',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'su_oss_chamado.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'su_oss_chamado.id',
     sortorder: 'desc'
   },
  json: true
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});