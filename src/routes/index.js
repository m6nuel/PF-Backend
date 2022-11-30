const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getProduct = require('./getProduct');
const createProduct = require('./createProduct');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/productos', getProduct);
router.use('/producto', createProduct);


module.exports = router;
