const express = require("express");//importa modulo express
const path = require("path"); //importando path

const app = express();//instancia uma referencia do express no projeto
const port = process.env.PORT || 3000;// set port usando a var de ambiente ou a porta 3000.

app.set("view engine", "ejs"); // set engine para trabalhar com EJS
app.use(express.static(path.join(__dirname, "public"))); //set public como raiz
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.redirect("/index");
});

app.get("/index", (req, res) => {
    const titulo = "Catálogo";
    res.render("index", {titulo: titulo} );
});

//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
