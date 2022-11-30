const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getProduct = require('./getProduct');
const createProduct = require('./createProduct');
const getProductById = require('./getProductById');
const deleteProduct = require('./deleteProduct');
const updateProduct = require('./updateProduct');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/productos', getProduct);
router.use('/producto', createProduct);
router.use('/producto', getProductById);
router.use('/producto', deleteProduct);
router.use('/producto', updateProduct);


module.exports = router;
