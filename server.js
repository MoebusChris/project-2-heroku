const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3001;

const router = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use('/', router)


app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});