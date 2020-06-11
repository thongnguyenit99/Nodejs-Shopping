const router = require('express').Router();
const config = require('../config/config.json');
const userModel = require('../models/categries.model');

// Load Categories
router.get('/', async (req, res) => {
    const listCon = await conModel.all();
    res.render('admin/conference/list', {
        layout: 'homeAdmin.hbs',
        listCon,
        listUser_master,
        helpers: {
            format_DOB: function (date) {
                return dob_date('dd-MM-yyyy', date)
            }
        }
    });
})

module.exports = router;