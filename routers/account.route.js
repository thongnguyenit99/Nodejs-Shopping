const router = require('express').Router();
const config = require('../config/config.json');

// Load Categories
router.get('/dang-nhap',  (req, res) => {
    res.render('vwAccount/login', { layout: 'main.hbs', title: 'Đăng nhập' });
})
router.get('/dang-ky', (req, res) => {
    res.render('vwAccount/register', { layout: 'main.hbs',title:'Đăng ký' });
})
router.get('/tai-khoan-nguoi-dung', (req, res) => {
    res.render('vwAccount/users/index', { layout: 'main.hbs', title: 'Tài khoản người dùng' });
})

module.exports = router;