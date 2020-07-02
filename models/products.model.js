const db = require('../utils/db');

const TABLE_Product = 'sanpham'
module.exports = {
    all: function () {
        return db.load(`select * from ${TABLE_Product}`);
    },
   new: function () {
       return db.load(`select * from ${TABLE_Product}  order by NgayNhap DESC limit 10`);
    },
    BestSeller:function() {
        return db.load(`select * from ${TABLE_Product}  order by SoLuongBan DESC limit 10`); 
    }
    ,
    sameProduct: (id) => {
        return db.load(`select * from ${TABLE_Product} WHERE MaLoaiSanPham=${id} order by rand() limit 5`); 
    },
    detailById: (id) => {
        return db.load(`select * from ${TABLE_Product} WHERE MaSanPham=${id} `);
    }
    
}