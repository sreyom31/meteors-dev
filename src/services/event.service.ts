import httpStatus from 'http-status';
import { Event, EventUpdate } from '../shared/customTypes';
import EventModel from '../models/events/event.model';
import ApiError from '../utils/ApiError';

const createEvent = async (eventBody: Event) => {
  if (await EventModel.isSlugTaken(eventBody.slug)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Slug already taken');
  }
  return EventModel.create(eventBody);
};

const getEventById = async (id: string) => EventModel.findById(id);
const getEventBySlug = async (slug: string) => EventModel.findOne({ slug });

const queryEvents = async (filter: any, options: any) => {
  const events = await EventModel.paginate(filter, options);
  return events;
};

const updateEventById = async (eventId: string, updateBody: EventUpdate) => {
  const event = await getEventById(eventId);
  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Event not found');
  }
  if (
    updateBody.slug &&
    (await EventModel.isSlugTaken(updateBody.slug, eventId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Slug already taken');
  }
  Object.assign(event, updateBody);
  await event.save();
  return event;
};

const deleteEventById = async (eventId: string) => {
  const event = await getEventById(eventId);
  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Event not found');
  }
  await event.remove();
  return event;
};

export default {
  createEvent,
  updateEventById,
  queryEvents,
  deleteEventById,
  getEventById,
  getEventBySlug,
};
