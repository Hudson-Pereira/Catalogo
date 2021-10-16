const express = require('express')

const router = express.Router()

const Heroi = require('../model/herois.js')

router.get('/:id', async (req, res) => {
    const heroi = await Heroi.findByPk(req.params.id);

    await heroi.destroy();

    res.redirect("/catalogo");
});

module.exports = router