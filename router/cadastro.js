const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    titulo = "CADASTRO";
    res.render("cadastro", { titulo: titulo });
});

module.exports = router;