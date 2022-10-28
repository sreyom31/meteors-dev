import { Router } from 'express';
import odrequestController from '../controllers/odrequest.controller';
import auth from '../middlewares/auth';
import { handleOd } from '../middlewares/multer';
import validate from '../middlewares/validation';
import { odrequestValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth('getOdrequests'),
    validate(odrequestValidation.createOdrequest),
    handleOd,
    odrequestController.createOdrequest
  )
  .get(
    auth('seeOdrequests'),
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

router.get('/downloads/:odrequestId', odrequestController.downloadOdrequest);

export default router;
