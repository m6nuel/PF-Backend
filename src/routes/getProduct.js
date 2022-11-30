const { Router } = require('express');
const { getProductoDb } = require('../controllers/getProductsDb');
const { Producto } = require("../db");

const router = Router();

router.get('/', async (req, res) => {
    try {
        let data = await getProductoDb();
        console.log(data)
        if (data.length === 0) {
            return res.json('La DB esta vacia');
        }
        return res.json(data);
    } catch (error) {
        console.log(error)
        return res.send('Comuniquense con el equipo del backend');
    }
})

module.exports = router;