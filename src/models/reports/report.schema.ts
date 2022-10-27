import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import { toJSON, paginate } from '../plugins';
import { setLastUpdated } from './report.methods';

const ReportSchema = new Schema({
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
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  file: {
    type: String,
    required: [true, 'File is required'],
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
ReportSchema.plugin(toJSON);
ReportSchema.plugin(paginate);
ReportSchema.methods.setLastUpdated = setLastUpdated;
ReportSchema.pre('save', function (next: NextFunction) {
  this.populate(['user', 'faculty']);
  next();
});
ReportSchema.pre(/^find/, function (next: NextFunction) {
  this.populate([
    { path: 'user', select: 'name email' },
    { path: 'faculty', select: 'name email' },
  ]);
  next();
});

export default ReportSchema;
