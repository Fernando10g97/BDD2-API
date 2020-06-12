const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var dbConn = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/vista1", (req, res) => {
  dbConn.query("SELECT * FROM IngresosUsuarios", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/vista2", (req, res) => {
  dbConn.query("SELECT * FROM CancionesMasEscuchadas", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/vista3", (req, res) => {
  dbConn.query("SELECT * FROM ReporteArtista", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.use((req, res) => {
  res.status(404).send({
    success: false,
    data: {
      message: "Estás intentando hacer algo que no deberías",
    },
  });
});

app.listen(4000, () => {
  console.log("Servidor ejecutándose...");
});
