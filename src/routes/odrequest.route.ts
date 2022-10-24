import { Router } from 'express';
import odrequestController from '../controllers/odrequest.controller';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { odrequestValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth('getOdrequests'),
    validate(odrequestValidation.createOdrequest),
    odrequestController.createOdrequest
  )
  .get(
    auth('manageOdrequests'),
    validate(odrequestValidation.getOdrequests),
    odrequestController.getOdrequests
  );

router
  .route('/:odrequestId')
  .get(
    auth('getOdrequests'),
    validate(odrequestValidation.getOdrequest),
    odrequestController.getOdrequest
  )
  .patch(
    auth('manageOdrequests'),
    validate(odrequestValidation.updateOdrequest),
    odrequestController.updateOdrequest
  )
  .delete(
    auth('manageOdrequests'),
    validate(odrequestValidation.deleteOdrequest),
    odrequestController.deleteOdrequest
  );

export default router;
