import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import { toJSON, paginate } from '../plugins';
import { setLastUpdated } from './odrequest.methods';

const OdrequestSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'User is required'],
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Faculty is required'],
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'event',
    required: [true, 'Event is required'],
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  file: {
    type: String,
    // required: [true, 'File is required'],
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
OdrequestSchema.plugin(toJSON);
OdrequestSchema.plugin(paginate);
OdrequestSchema.methods.setLastUpdated = setLastUpdated;
OdrequestSchema.pre('save', function (next: NextFunction) {
  this.populate(['user', 'faculty', 'event']);
  next();
});
OdrequestSchema.pre(/^find/, function (next: NextFunction) {
  this.populate(['user', 'faculty', 'event']);
  next();
});

export default OdrequestSchema;
