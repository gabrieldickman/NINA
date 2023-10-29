const mysql = require("mysql2/promise");

require("dotenv").config({ path: "../../.env" });
  
  const veroHost = process.env.VERONICA_HOST;
  const veroPort = process.env.VERONICA_PORT;
  const veroUser = process.env.VERONICA_USER;
  const veroPass = process.env.VERONICA_PASSWORD;
  const database = process.env.VERONICA_DATABASE;

module.exports = {

  connection: {
    sql: mysql.createPool({
      connectionLimit: 10,
      host: veroHost,
      port: veroPort,
      user: veroUser,
      password: veroPass,
      database: database,
    }),
  }
}
