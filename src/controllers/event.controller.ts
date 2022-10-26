import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { eventService } from '../services';

const createEvent = catchAsync(async (req: Request, res: Response) => {
  const event = await eventService.createEvent(req.body);
  res.status(httpStatus.CREATED).send(event);
});

const sendMail = catchAsync(async (req: Request, res: Response) => {
  const event = await eventService.sendMail(req.params.eventId);
  res.send(event);
});

const getEvent = catchAsync(async (req: Request, res: Response) => {
  const event = await eventService.getEventById(req.params.eventId);
  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Event not found');
  }
  res.send(event);
});

const getEvents = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, [
    'slug',
    'hostingClub',
    'venue',
    'forTeacher',
    'forStudent',
    'isActive',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await eventService.queryEvents(filter, options);
  res.send(result);
});

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const event = await eventService.updateEventById(
    req.params.eventId,
    req.body
  );
  res.send(event);
});

const deleteEvent = catchAsync(async (req: Request, res: Response) => {
  await eventService.deleteEventById(req.params.eventId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createEvent,
  sendMail,
  getEvent,
  getEvents,
  updateEvent,
  deleteEvent,
};
