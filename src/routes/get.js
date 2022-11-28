const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.json('grupo 9');
})

module.exports = router;