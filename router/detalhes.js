const express = require('express');
const router = express.Router();

let herois = [{ img: "https://cdn.ome.lt/-rlI9Dfnv9_IH6OEt_9YZTIHZ_g=/970x360/smart/uploads/conteudo/fotos/CAPA-superman.png", nome: "Superman", forca: 10, vel: 10, hab: 8, equip: 2, int: 7, poder: 10 },
{ img: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/05/Homem-Aranha-1-1024x576.jpg", nome: "SpiderMan", forca: 7, vel: 8, hab: 8, equip: 6, int: 9, poder: 9 },
{ img: "https://cdn.ome.lt/ShNEEjXy2us3h_Sxe7AvZ9Vi0jA=/570x0/smart/uploads/conteudo/fotos/CAPA-hulk_Rvhcy2G.png", nome: "Hulk", forca: 10, vel: 9, hab: 4, equip: 1, int: 3, poder: 9 },
{ img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuwQGnO6uYyDw27xlvj4aNOOZF1QZodu5sg&usqp=CAU", nome: "IronMan", forca: 8, vel: 7, hab: 9, equip: 10, int: 10, poder: 9 }
];

router.get("detalhes/:id", (req, res) => {
    titulo = "DETALHES";
    const id = req.params.id
    const heroi = herois[id]
    res.render("detalhes", { titulo: titulo, heroi, id});
    //res.json(heroi);
    console.log(heroi)
});

module.exports = router;