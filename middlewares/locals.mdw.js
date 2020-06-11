const categoryModel = require('../models/categories.model');

module.exports = function (app) {
  // app.use(function (req, res, next) {
  //   if (req.session.isAuthenticated === null) {
  //     req.session.isAuthenticated = false;
  //   }

  //   res.locals.lcIsAuthenticated = req.session.isAuthenticated;
  //   res.locals.lcAuthUser = req.session.authUser;
  //   next();
  // })

  app.use(async function (req, res, next) {
    const rows = await categoryModel.proType_all();
    res.locals.lcCategorie = rows;
    next();
    console.log(rows);
  })
  app.use(async function (req, res, next) {
    const rows1 = await categoryModel.proManu_all();
    res.locals.lcCategories = rows1;
    next();
    console.log(rows1);
  })
}
