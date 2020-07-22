const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const transferRoutes = require("./routes/transfer-list");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin' , adminRoutes);
app.use(transferRoutes);

app.use(errorController.get404);

sequelize.sync().then(result => {
    // console.log(result);
    app.listen(3000);
}).catch(err => {
    console.log(err);
});


