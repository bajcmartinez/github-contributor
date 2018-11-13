const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// finally, let's start our server...
var server = app.listen( process.env.PORT || 8888, function(){
    console.log(`Listening on port ${server.address().port}`);
});