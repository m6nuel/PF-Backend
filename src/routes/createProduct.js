const { Router } = require('express');
const { Producto } = require('../db');
const router = Router();

router.post('/', async (req, res) => {
    try {
        let { marca, tipoProducto, stock } = req.body;
        let newProduct = await Producto.create({
            marca,
            tipoProducto,
            stock
        })
        res.status(200).send(newProduct);
    } catch (error) {
        console.log(error)
        res.send('Faltan Datos')
    }

})

module.exports = router;