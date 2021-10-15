const express = require('express');

const router = express.Router();

router.get("/:id", (req, res) => {

    const title = herois[req.params.id].nome;

    res.render("detalhes", { titulo: title, heroi: herois[req.params.id] });

});

module.exports = router;