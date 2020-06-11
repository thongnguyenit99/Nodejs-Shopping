
const express = require('express');
const productModel = require('../models/products.model');

const router = express.Router();

router.get('/', async function (req, res) {
    const newlist = await productModel.new();
    const bestlist = await productModel.BestSeller();
    res.render('home', {
        newlist,bestlist
    });
})


module.exports = router;