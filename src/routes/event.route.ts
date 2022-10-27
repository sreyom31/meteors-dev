import { Router } from 'express';
import eventController from '../controllers/event.controller';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { eventValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth('manageEvents'),
    validate(eventValidation.createEvent),
    eventController.createEvent
  )
  .get(
    auth('getEvents'),
    validate(eventValidation.getEvents),
    eventController.getEvents
  );

router
  .route('/:eventId')
  .get(
    auth('getEvents'),
    validate(eventValidation.getEvent),
    eventController.getEvent
  )
  .patch(
    auth('manageEvents'),
    validate(eventValidation.updateEvent),
    eventController.updateEvent
  )
  .delete(
    auth('manageEvents'),
    validate(eventValidation.deleteEvent),
    eventController.deleteEvent
  );

router
  .route('/:eventId/mail')
  .get(auth('manageEvents'), eventController.sendMail);

export default router;
