const Joi = require('joi');
import {Route} from './route';

let getAllPets: Route = {
    method: 'GET',
    path: '/pets',
    config: {
        description: 'Get All Pets',
        notes: 'Returns a list including all pets available',
        tags: ['api'],
        validate: {},
        handler: (request: any, reply: any) => {
            return reply('All pets');
        }
    }
};

let getPet: Route = {
    method: 'GET',
    path: '/pets/{id}',
    config: {
        description: 'Get A Pet By Id',
        notes: 'Returns a single pet',
        tags: ['api'],
        validate: {
            params: {
                id: Joi.string()
                    .required()
                    .description('The pets id'),
            }
        },
        handler: (request: any, reply: any) => {
            return reply(`Pet with id ${request.params.id}`);
        }
    }
};

module.exports = [
    getAllPets,
    getPet
];