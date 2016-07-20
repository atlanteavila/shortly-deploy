var app = require('./server-config.js');

// var port = 4568;
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

app.listen(port);

console.log('Server now listening on port ' + port);
