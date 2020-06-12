var mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'localhost',
    user: 'usuario',
    password: 'contraseña',
    database: 'nombre de la base de datos',
    port: el que es el tuyo
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected..!");
  }
});

module.exports = connection;
