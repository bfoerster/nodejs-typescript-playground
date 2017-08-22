import * as mongoose from 'mongoose';
import {IPetModel} from '../db/IPetModel';
import {PetSchema} from '../db/PetSchema';


export const Pet = mongoose.model<IPetModel>('Pet', PetSchema);