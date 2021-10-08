const express = require("express");//importa modulo express
const path = require("path"); //importando path
const app = express();//instancia uma referencia do express no projeto
const port = process.env.PORT || 3000;// set port usando a var de ambiente ou a porta 3000.

app.set("view engine", "ejs"); // set engine para trabalhar com EJS

app.use(express.static(path.join(__dirname, "public"))); //set public como raiz
app.use(express.urlencoded({ extended: true }));

const herois = [{
    Nome: "Homem de Ferro",
    "Força": 5,
    Velocidade: 5,
    Habilidade: 5,
    Equipamento: 10,
    "Inteligência": 10,
    Poder: 1
}]

app.get("/", (req, res) => {
    res.redirect("/index");
});

app.get("/index", (req, res) => {
    const titulo = "PÁGINA INICIAL";
    res.render("index", { titulo: titulo });
});

app.get("/catalogo", (req, res) => {
    const titulo = "CATÁLOGO";
    res.render("catalogo", { titulo: titulo });
});

app.post("/catalogo", (req, res) => {
    const { nome, forca, velocidade, habilidade, equipamento, inteligencia, poder } = req.body
    const novoHeroi = {
        Nome: nome,
        "Força": forca,
        Velocidade: velocidade,
        Habilidade: habilidade,
        Equipamento: equipamento,
        "Inteligência": inteligencia,
        Poder: poder
    }
    herois.push(novoHeroi);
    //mensagem = `${novoHeroi.Nome} cadastrado com sucesso!`
    const titulo = "CATÁLOGO";
    res.render("detalhes", { titulo: titulo }); //precisa renderizar /detalhes pra não dar erro?
});

app.get("/cadastro", (req, res) => {
    titulo = "CADASTRO";
    res.render("cadastro", { titulo: titulo });
});

app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id
    const novoHeroi = herois[id]
    titulo = "DETALHES";
    res.render("detalhes", { titulo: titulo, novoHeroi });
});

//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
