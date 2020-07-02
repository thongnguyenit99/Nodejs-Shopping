const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

require('./middlewares/locals.mdw')(app);

app.use(express.urlencoded({ extended: true }));
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs'
}))
app.set('view engine', 'hbs');
app.use(express.static('./public/'));

app.use('/', require('./routers/home.route'));
app.use('/tai-khoan', require('./routers/account.route'));
//app.use('/danh-muc', require('./routers/home.route'));
app.use('/san-pham', require('./routers/product.route'));

app.use(function (req, res) {
    res.render('404');
})




app.listen(port, () => {
    console.log(`Server start port at http://localhost:${port}`);
})