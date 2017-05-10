var app = require('../app');
app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
    console.log('Express app works on ' + server.address().port);
});