import * as mongoose from 'mongoose';

export const PetSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String
});