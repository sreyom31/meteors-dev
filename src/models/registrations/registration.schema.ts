import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import { setLastUpdated } from './registration.methods';
import { toJSON, paginate } from '../plugins';

const RegistrationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    unique: true,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'event',
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
  qrCode: {
    type: String,
  },
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

// add plugin that converts mongoose to json
RegistrationSchema.plugin(toJSON);
RegistrationSchema.plugin(paginate);
RegistrationSchema.methods.setLastUpdated = setLastUpdated;
RegistrationSchema.pre('save', function (next: NextFunction) {
  this.populate(['user', 'event']);
  next();
});
RegistrationSchema.pre(/^find/, function (next: NextFunction) {
  this.populate([
    { path: 'user', select: 'name email' },
    { path: 'event', select: 'name availableCount' },
  ]);
  next();
});

export default RegistrationSchema;
