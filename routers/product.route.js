const express = require('express');
const router = express.Router();
const productModel = require('../models/products.model')
const moment  = require('moment')



router.get('/chi-tiet/:type_id/:id', async (req, res) => {
    const Id = req.params.id;
    const typeId = req.params.type_id;
    console.log(typeId);
    console.log(Id);
    const [details, sameProduct] = await Promise.all([
        productModel.detailById(Id),
        productModel.sameProduct(typeId)]);
    // console.log(details);
    // console.log(sameProduct);
    res.render('vwProducts/details', {
        details,
        sameProduct,
        title:'Chi tiết',
        helpers: {
            format_DOB: function (date) {
                return moment(date, 'YYYY/MM/DD').format('h:mm | DD-MM-YYYY');
            }
        },
        layout: 'main.hbs'
    })
})
router.get('/theo-loai', (req, res) => {
    res.render('vwProducts/product_type');
})
router.get('/theo-hang', (req, res) => {
    res.render('vwProducts/product_manu');
})

module.exports = router;