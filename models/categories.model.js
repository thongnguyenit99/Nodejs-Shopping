const db = require('../utils/db');

const TABLE_proType = 'loaisanpham'
const TABLE_proManu = 'hangsanxuat'
module.exports={
    proType_all: function () {
        return db.load(`select * from ${TABLE_proType}`);
    },
    proManu_all: function () {
        return db.load(`select * from ${TABLE_proManu}`);
    },
}