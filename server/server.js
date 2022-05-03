const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const connectdb = require('./src/config/db')
const Port = process.env.PORT || 5000;
const path = require('path');
const Routes = require('./src/routes')
Routes(app);
connectdb();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'src/public')))
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(Port, () => {
    console.log(`Server is listening on ${Port}`);
})