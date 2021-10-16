const express = require('express')

const router = express.Router()

const rotaCadastro = require("./cadastro")
const rotaCatalogo = require("./catalogo")
const rotaDetalhes = require("./detalhes")
const rotaEditar = require("./editar")
const rotaApagar = require("./apagar")

router.use("/cadastro", rotaCadastro)
router.use("/catalogo", rotaCatalogo)
router.use("/detalhes", rotaDetalhes)
router.use("/editar", rotaEditar)
router.use("/apagar", rotaApagar)

router.get("/", (req, res) =>
    res.redirect("/index")
);

router.get("/index", (req, res) =>

    res.render("index")
);

module.exports = router