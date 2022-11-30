const { Router } = require('express');
const { updateProduct } = require('../controllers/updateProduct');


const router = Router();

router.put('/:id', async (req, res) => {
    let {id} = req.params;
    let { marca, tipoProducto, stock } = req.body;
    try {
        let update = await updateProduct(id);
        update.marca = marca;
        update.tipoProducto = tipoProducto;
        update.stock = stock;
        console.log(update)
        await update.save()
        res.send('Producto Actualizado');
    } catch (error) {
        console.log(error);
        res.json('Contacte al quipo de backend')
    }
})

module.exports = router;