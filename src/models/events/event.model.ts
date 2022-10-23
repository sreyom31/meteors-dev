import { model } from 'mongoose';
import { IEventDocument, IEventModel } from './event.types';
import EventSchema from './event.schema';

const EventModel = model<IEventDocument, IEventModel>('event', EventSchema);
export default EventModel;
