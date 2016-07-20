var app = require('./server-config.js');

// var port = 4568;
var port_number = server.listen(process.env.PORT);
app.listen(port_number);

console.log('Server now listening on port ' + port);
