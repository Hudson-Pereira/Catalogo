const express = require('express')

const router = express.Router()

const Heroi = require('../model/herois.js')

router.get("/:id", async (req, res) => {

    const heroi = await Heroi.findByPk(req.params.id)

    res.render("editar", { heroi: heroi })

})

router.post('/:id', async (req, res) => {
    const heroi = await Heroi.findByPk(req.params.id);
    const { image, nome, forca, vel, hab, equip, int, poder } = req.body;

    heroi.Imagem = image;
    heroi.Nome = nome;
    heroi.Força = forca;
    heroi.Velocidade = vel;
    heroi.Habilidade = hab;
    heroi.Equipamento = equip;
    heroi.Inteligência = int;
    heroi.Poder = poder;

    await heroi.save();
    res.redirect("/catalogo");
});

module.exports = router
