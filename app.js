const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

app.use(express.urlencoded({ extended: true }));
app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs'
}))
app.set('view engine', 'hbs');
app.use(express.static('./public/'));

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/index.html', (req, res) => {
    res.render('home');
})
app.get('/about.html', (req, res) => {
    res.render('about');
})
app.get('/contact.html', (req, res) => {
    res.render('contact');
})

app.get('/login.html', (req, res) => {
    res.render('vwAccount/login');
})
app.get('/register.html', (req, res) => {
    res.render('vwAccount/register', { layout: false });
})
app.get('/shopping-cart.html', (req, res) => {
    res.render('vwProducts/shopping-cart');
})
app.get('/details.html', (req, res) => {
    res.render('vwProducts/details');
})
app.use(function (req, res) {
    res.render('404');
})




app.listen(port, () => {
    console.log(`Server start port at http://localhost:${port}`);
})