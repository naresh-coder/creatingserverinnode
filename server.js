const server  = require('http');


server.createServer((request, respond) => {
    respond.writeHead(200, { 
        'Content-Type': 'application/json'
        }
    );
    respond.write(' Hello World !!');
    respond.end();
}).
listen(5050);