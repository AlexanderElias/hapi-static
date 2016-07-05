'use strict';

const Hapi = require('hapi');
const Routes = require('./routes');
const Registers = require('./registers');

const server = new Hapi.Server();

server.connection({ port: process.env.port || 8000 });
server.register(Registers, function(error){ if (error) throw error; });

server.route(Routes);

server.start(function () {
	console.log(server.info);
	console.log('Hapi Static - Running: ' + server.info.uri);
});
