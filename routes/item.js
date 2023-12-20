const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item');

router.post('/addItem',itemController.addItem);

router.get('/getAll-Items',itemController.getAll);

router.put('/buyOne/:id',itemController.buyOne);

router.put('/buyTwo/:id',itemController.buyTwo);

router.put('/buyThree/:id',itemController.buyThree);

module.exports = router;