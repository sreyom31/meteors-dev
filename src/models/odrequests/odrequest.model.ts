import { model } from 'mongoose';
import { IOdrequestDocument, IOdrequestModel } from './odrequest.types';
import OdrequestSchema from './odrequest.schema';

const OdrequestModel = model<IOdrequestDocument, IOdrequestModel>(
  'odrequest',
  OdrequestSchema
);
export default OdrequestModel;
