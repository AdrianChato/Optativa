const express = require('express');
const router = express.Router();
const Moto = require('../models/moto');


router.get('/', async (req, res) => {
    try {
        const arrayMotosDB = await Moto.find();
        console.log(arrayMotosDB);

        res.render("moto", {
            arrayMotos: arrayMotosDB
        });

    } catch (error) {
        console.error(error);
    }
});

router.get('/crear', (req, res) => {
    res.render("crearMoto");
});

router.get('/editar/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const motoDB = await Moto.findById(id);

        if (!motoDB) {
            return res.redirect('/moto'); // Si no existe, redirige
        }

        res.render('editarMoto', { 
            moto: motoDB 
        });

    } catch (error) {
        console.error(error);
        res.redirect('/moto');
    }
});

router.post('/editar/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        await Moto.findByIdAndUpdate(id, {
            marca: body.marca,
            modelo: body.modelo,
            matricula: body.matricula,
            cilindrada: body.cilindrada,
            itv_fecha: body.itv_fecha,
            qr_codigo: body.qr_codigo,
            id_propietario: body.id_propietario
        });

        res.redirect('/moto');

    } catch (error) {
        console.error(error);
        res.redirect('/moto');
    }
});


router.post('/', async (req, res) => {
    const body = req.body;

    try {
        const motoDB = new Moto({
            marca: body.marca,
            modelo: body.modelo,
            matricula: body.matricula,
            cilindrada: body.cilindrada,
            itv_fecha: body.itv_fecha,
            qr_codigo: body.qr_codigo,
            id_propietario: body.id_propietario
        });

        await motoDB.save();
        res.redirect('/moto');

    } catch (error) {
        console.error(error);
    }
});


router.get('/borrar/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await Moto.findByIdAndDelete(id);
        res.redirect('/moto');

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
