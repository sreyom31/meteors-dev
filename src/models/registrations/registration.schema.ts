import { Schema } from 'mongoose';
import { setLastUpdated } from './registration.methods';
import { toJSON, paginate } from '../plugins';

const RegistrationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  isPresent: {
    type: Boolean,
    default: false,
  },
  isRefreshment: {
    type: Boolean,
    default: false,
  },
  certificate: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// add plugin that converts mongoose to json
RegistrationSchema.plugin(toJSON);
RegistrationSchema.plugin(paginate);
RegistrationSchema.methods.setLastUpdated = setLastUpdated;

export default RegistrationSchema;
