import { model } from 'mongoose';
import {
  IRegistrationDocument,
  IRegistrationModel,
} from './registration.types';
import RegistrationSchema from './registration.schema';

const RegistrationModel = model<IRegistrationDocument, IRegistrationModel>(
  'registration',
  RegistrationSchema
);
export default RegistrationModel;
