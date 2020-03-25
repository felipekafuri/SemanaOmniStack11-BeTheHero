const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de parametros:
 *
 * Query Params: Parametros nomeados enviados na trota após o simbolo de ?
 * Route Params: Parametos utilizados para identificar recursos
 * Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQlite, PostgreSQL SQL é o formato
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query Biulder: table("users").select("*").where()
 */

app.listen(3333);
