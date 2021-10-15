const express = require('express');

const router = express.Router();

const { heroi } = require('../model')

router.get("/:id", (req, res) => {

    const id = req.params.id
    const heroid = heroi[id]
    const title = heroid[req.params.id].Nome;

    res.render("detalhes", { titulo: title, heroi: heroi[req.params.id] });

});

module.exports = router;