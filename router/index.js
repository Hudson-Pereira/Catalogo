const express = require('express');
const router = express.Router();

const rotaCadastro = require("./cadastro")
const rotaCatalogo = require("./catalogo")
const rotaDetalhes = require("./detalhes")

router.use("/cadastro", rotaCadastro);
router.use("/catalogo", rotaCatalogo);
router.use("/detalhes", rotaDetalhes);

router.get("/", (req, res) => {
    res.redirect("/index");
});

router.get("/index", (req, res) => {
    const titulo = "PÁGINA INICIAL";
    res.render("index", { titulo: titulo });
});

module.exports = router