const Joi = require('joi');
import {Route} from './route';
import {Pet} from '../model/Pet';

const getAllPets: Route = {
    method: 'GET',
    path: '/pets',
    config: {
        description: 'Get All Pets',
        notes: 'Returns a list including all pets available',
        tags: ['api'],
        handler: (request: any, reply: any) => {
            Pet.find().then(reply).catch(() => reply('error'));
        }
    }
};

const getPet: Route = {
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
            const petId = request.params.id;
            Pet.findById(petId).then(reply).catch(() => reply('error'));
        }
    }
};

// curl -H "Content-Type: application/json" -X POST -d '{"name":"Waldi","category":"Dackel"}' http://localhost:8000/pets
const postPet: Route = {
    method: 'POST',
    path: '/pets',
    config: {
        description: 'Saves A Pet',
        notes: 'Saves given pet to database and returns it',
        tags: ['api'],
        validate: {
            payload: Joi.object({
                name: Joi.string().required(),
                category: Joi.string()
            })
        },
        handler: (request: any, reply: any) => {
            const pet = new Pet(request.payload);
            pet.save().then(reply).catch(() => reply('error'));
        }
    }
};

module.exports = [
    getAllPets,
    getPet,
    postPet
];