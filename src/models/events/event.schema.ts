import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import validator from 'validator';
import { paginate, toJSON } from '../plugins';
import { isSlugTaken } from './event.statics';
import { setLastUpdated } from './event.methods';

const EventSchema = new Schema({
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isSlug, 'Please provide a valid slug'],
  },
  desc: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  imageCover: {
    type: String,
  },
  hostingClub: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Hosting club is required'],
  },
  prizes: [
    {
      type: String,
    },
  ],
  registrationFee: {
    type: Number,
    default: 0,
  },
  speakers: [
    {
      type: String,
    },
  ],
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
  },
  venue: {
    type: String,
    required: [true, 'Venue is required'],
  },
  forTeacher: {
    type: Boolean,
    default: false,
  },
  forStudent: {
    type: Boolean,
    default: true,
  },
  tracks: [
    {
      type: String,
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
  maxCount: {
    type: Number,
    required: [true, 'Max count is required'],
  },
  availableCount: {
    type: Number,
    required: [true, 'Available count is required'],
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

EventSchema.plugin(toJSON);
EventSchema.plugin(paginate);
EventSchema.methods.setLastUpdated = setLastUpdated;
EventSchema.statics.isSlugTaken = isSlugTaken;
EventSchema.pre('save', async function (next: NextFunction) {
  this.populate('hostingClub');
  next();
});
EventSchema.pre(/^find/, function (next: NextFunction) {
  this.populate({
    path: 'hostingClub',
    select: 'name',
  });
  next();
});

export default EventSchema;
