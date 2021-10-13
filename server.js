const express = require("express");//importa modulo express
const path = require("path"); //importando path
const app = express();//instancia uma referencia do express no projeto
require('dotenv').config();

const db = require("./model/database"); 


const port = process.env.PORT;// set port usando a var de ambiente ou a porta 3000.

const rotas = require("./router")

app.set("view engine", "ejs"); // set engine para trabalhar com EJS

app.use(express.static(path.join(__dirname, "/views"))); //set public como raiz
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/", rotas)


//liga o servidor na porta 3000
db.conectado();
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
