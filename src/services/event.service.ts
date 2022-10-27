import httpStatus from 'http-status';
import { Event, EventUpdate, User } from '../shared/customTypes';
import EventModel from '../models/events/event.model';
import ApiError from '../utils/ApiError';
import userService from './user.service';
import Email from '../utils/email';

const sendMail = async (event: Event, mailArray) => {
  try {
    mailArray.results.forEach(async (result: User) => {
      await new Email().sendEventRegister(result, event);
    });
  } catch (error) {
    console.log(error);
  }
};

const createEvent = async (eventBody: Event) => {
  if (await EventModel.isSlugTaken(eventBody.slug)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Slug already taken');
  }
  const event = await EventModel.create(eventBody);
  const data = await userService.queryUsers(
    { role: ['student', 'faculty'] },
    {}
  );
  await sendMail(event, data);
  return { event };
};

const getEventById = async (id: string) => EventModel.findById(id);
const getEventBySlug = async (slug: string) => EventModel.findOne({ slug });

const queryEvents = async (filter: any, options: any) => {
  const events = await EventModel.paginate(filter, options);
  return events;
};

const changeCount = async (eventId: string, operation: string) => {
  const event = await getEventById(eventId);
  if (operation === 'subtract') {
    event.availableCount -= 1;
  }
  if (operation === 'add') {
    event.availableCount += 1;
  }
  await event.save();
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
  sendMail,
  changeCount,
  updateEventById,
  queryEvents,
  deleteEventById,
  getEventById,
  getEventBySlug,
};
