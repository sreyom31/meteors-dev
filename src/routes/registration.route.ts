import { Router } from 'express';
import registrationController from '../controllers/registration.controller';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { registrationValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth('getRegistrations'),
    validate(registrationValidation.createRegistration),
    registrationController.createRegistration
  )
  .get(
    auth('getRegistrations'),
    validate(registrationValidation.getRegistrations),
    registrationController.getRegistrations
  );

router
  .route('/:registrationId')
  .get(
    auth('getRegistrations'),
    validate(registrationValidation.getRegistration),
    registrationController.getRegistration
  )
  .patch(
    auth('manageRegistrations'),
    validate(registrationValidation.updateRegistration),
    registrationController.updateRegistration
  )
  .delete(
    auth('manageRegistrations'),
    validate(registrationValidation.deleteRegistration),
    registrationController.deleteRegistration
  );

export default router;
