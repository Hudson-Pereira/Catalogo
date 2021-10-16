const express = require('express');
const Heroi = require('../model/herois.js');

const router = express.Router();

router.get("/:id", async (req, res) => {
    const heroi = await Heroi.findByPk(req.params.id);
    res.render("detalhes", { heroi: heroi });


});

module.exports = router;