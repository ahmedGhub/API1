const express = require('express');
const bodyParser = require('body-parser');

// local requires
const feedsController = require('./controllers/feeds');
const feedsRoutes = require('./routes/feeds');





const app = express()

// just to let the bodyparser set to json instead of the urlencoded which is the defualt body type of the forms being sent from regural html files
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()

})


app.use('/post', feedsRoutes);




// the port the app is listening at
app.listen(8080);

module.exports = app;