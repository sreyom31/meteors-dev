import { Router } from 'express';
import reportController from '../controllers/report.controller';
import auth from '../middlewares/auth';
import { handleReport } from '../middlewares/multer';
import validate from '../middlewares/validation';
import { reportValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth('getReports'),
    validate(reportValidation.createReport),
    handleReport,
    reportController.createReport
  )
  .get(
    auth('manageReports'),
    validate(reportValidation.getReports),
    reportController.getReports
  );

router
  .route('/:reportId')
  .get(
    auth('getReports'),
    validate(reportValidation.getReport),
    reportController.getReport
  )
  .patch(
    auth('manageReports'),
    validate(reportValidation.updateReport),
    reportController.updateReport
  )
  .delete(
    auth('manageReports'),
    validate(reportValidation.deleteReport),
    reportController.deleteReport
  );

export default router;
