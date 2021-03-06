'use strict';
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const mongoose = require('mongoose');

const PetRoutes = require('./src/routes/pets');
import {ServerConfig} from "./src/serverConfig";

const server = new Hapi.Server();
const serverConfig: ServerConfig = {host: 'localhost', port: 8000};
server.connection(serverConfig);


const options = {
    info: {
        'title': 'Pet API Documentation',
        'version': "1",
    }
};

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err: any) => {
    server.start((err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Server started at ', server.info.uri);
        }
    });
});

server.route(PetRoutes);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/my_pets', {useMongoClient: true})
    .then(() => console.log('Connection to database successful'));


