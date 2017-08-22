import {Document} from 'mongoose';
import {IPet} from '../model/IPet';

export interface IPetModel extends IPet, Document {

}
