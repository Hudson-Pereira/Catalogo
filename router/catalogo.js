const express = require('express');

const router = express.Router();

const Heroi = require('../model/herois.js');


router.get("/", async (req, res) => {

    const heroi = await Heroi.findAll({ order: [['id', 'DESC']] })

    res.render("catalogo", { heroi: heroi });

});

router.post("/", async (req, res) => {

    const { image, nome, forca, vel, hab, equip, int, poder } = req.body

    if (!image || !nome || !forca || !vel || !hab || !hab || !equip || !int || !poder) {
        res.render("cadastro", { mensagem: "Favor corrigir os dados" })
    }

    try {

        await Heroi.create({
            Imagem: image,
            Nome: nome,
            'Força': forca,
            Velocidade: vel,
            Habilidade: hab,
            Equipamento: equip,
            'Inteligência': int,
            Poder: poder
        })

        res.redirect("catalogo");

    } catch (error) {
        console.log(error)
        res.render("index", { mensagem: 'Ocorreu um erro, tente novamente.' })
    }
});

module.exports = router
