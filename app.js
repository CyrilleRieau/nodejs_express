var express = require('express');
var app = express();

/*app.get('/', function(req, res) {
    res.send('Hello World!');
});
app.get('/toto', function(req, res) {
    res.send('Yo toto!');
});
res.send('Yo toto!');
    app.get('/static', function(req, res) {
    });*/

app.use('/test', express.static('static'));
app.use('/', express.static('static'));
/*app.use(function(req, res, next) {
    console.log('Test');
    res.status(404).send('Something broke!');
});*/

app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/static/erreur404.html');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});