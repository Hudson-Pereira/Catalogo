const express = require("express");//importa modulo express
const path = require("path"); //importando path
const app = express();//instancia uma referencia do express no projeto
const port = process.env.PORT || 3000;// set port usando a var de ambiente ou a porta 3000.

app.set("view engine", "ejs"); // set engine para trabalhar com EJS

app.use(express.static(path.join(__dirname, "public"))); //set public como raiz
app.use(express.urlencoded({ extended: true }));

// variaveis

let herois = [{ img: "https://cdn.ome.lt/-rlI9Dfnv9_IH6OEt_9YZTIHZ_g=/970x360/smart/uploads/conteudo/fotos/CAPA-superman.png", nome: "Superman", forca: 10, vel: 10, hab: 8, equip: 2, int: 7, poder: 10, icon:"https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/07/Logo-Vazado-Superman-PNG.png" },
{ img: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/05/Homem-Aranha-1-1024x576.jpg", nome: "SpiderMan", forca: 7, vel: 8, hab: 8, equip: 6, int: 9, poder: 9, icon:"https://imagensemoldes.com.br/wp-content/uploads/2020/04/Homem-Aranha-Logo-PNG.png" },
{ img: "https://cdn.ome.lt/ShNEEjXy2us3h_Sxe7AvZ9Vi0jA=/570x0/smart/uploads/conteudo/fotos/CAPA-hulk_Rvhcy2G.png", nome: "Hulk", forca: 10, vel: 9, hab: 4, equip: 1, int: 3, poder: 9, icon:"https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-M%C3%A3o-Hulk-PNG.png" },
{ img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuwQGnO6uYyDw27xlvj4aNOOZF1QZodu5sg&usqp=CAU", nome: "IronMan", forca: 8, vel: 7, hab: 9, equip: 10, int: 10, poder: 9, icon:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Cartoon-Cabe%C3%A7a-Homem-de-Ferro-PNG-1024x1024.png" }
];

app.get("/", (req, res) => {
    res.redirect("/index");
});

app.get("/index", (req, res) => {
    const titulo = "PÁGINA INICIAL";
    res.render("index", { titulo: titulo });
});

app.get("/detalhes/:id", (req, res) => {
    titulo = "DETALHES";
    const id = req.params.id
    const heroi = herois[id]
    res.render("detalhes", { titulo: titulo, heroi });
});

app.get("/catalogo", (req, res) => {
    const titulo = "LISTA";

    res.render("catalogo", { titulo: titulo, herois:herois });
});

app.get("/cadastro", (req, res) => {
    titulo = "CADASTRO";
    res.render("cadastro", { titulo: titulo });
});

app.post("/catalogo", (req, res) => {
    const { image, nome, forca, vel, hab, equip, int, poder, icon } = req.body;
    const novoHeroi = {
        img: image,
        nome: nome,
        forca: forca,
        vel: vel,
        hab: hab,
        equip: equip,
        int: int,
        poder: poder,
        icon: icon
    };
    herois.push(novoHeroi);
    //mensagem = `${novoHeroi.Nome} cadastrado com sucesso!`
    const titulo = "CATÁLOGO";
    res.render("catalogo", { titulo: titulo, herois });
});



//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
