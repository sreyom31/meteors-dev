import jwt from 'jsonwebtoken';
import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import { setLastUpdated } from './registration.methods';
import { toJSON, paginate } from '../plugins';
import config from '../../config';

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
RegistrationSchema.pre('save', async function (next: NextFunction) {
  const registration = this;
  const payload = {
    id: registration._id,
    user: registration.user,
    event: registration.event,
    registeredTime: registration.lastUpdated,
    type: 'qrCode',
  };
  registration.qrCode = await jwt.sign(payload, config.jwt.qrCodeSecret);
});
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
