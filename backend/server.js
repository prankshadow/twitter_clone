const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config');
var cors = require('cors');

global.__basedir = __dirname;
mongoose.connect(MONGODB_URL);

mongoose.connection.on('Connected', () => {
    console.log("Succeesfully connected to Sales App database");
});

mongoose.connection.on('error', (error) => {
    console.log("Some Error occurred while connecting to the server");
});

app.use(cors());  //used as middle ware to connect between the server
app.use(express.json());

require('./models/user_model');  //importing user model
app.use(require('./routes/user_route'));    //using user route


require('./models/post_models');  //importing user model
app.use(require('./routes/post_route'))

app.use(require('./routes/file_route')) //image upload


app.listen(port, () => console.log(`Sales app is running on port ${port}!`))
