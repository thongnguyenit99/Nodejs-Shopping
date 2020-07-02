const router = require('express').Router();
const config = require('../config/config.json');
const productModel = require('../models/products.model');

// Load Categories
router.get('/',async (req, res) => {
    const newlist = await productModel.new();
    const bestlist = await productModel.BestSeller();
    res.render('home', {
        newlist, bestlist,
         title: 'Trang chủ',
    });
})
router.get('/gioi-thieu', (req, res) => {
    res.render('about', { title: 'Giới thiệu '});
})
router.get('/lien-he', (req, res) => {
    res.render('contact', { title: 'Liên hệ ' });
})
router.get('/gio-hang', (req, res) => {
    res.render('vwProducts/shopping-cart', { title: 'Giỏ hàng ' });
})



module.exports = router;