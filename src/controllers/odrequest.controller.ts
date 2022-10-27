import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { odrequestService } from '../services';

const createOdrequest = catchAsync(async (req: Request, res: Response) => {
  const odrequest = await odrequestService.createOdrequest(req.body);
  if (req.file) odrequest.file = req.file.filename;
  odrequest.save();
  res.status(httpStatus.CREATED).send(odrequest);
});

const getOdrequest = catchAsync(async (req: Request, res: Response) => {
  const odrequest = await odrequestService.getOdrequestById(
    req.params.odrequestId
  );
  if (!odrequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Odrequest not found');
  }
  res.send(odrequest);
});

const getOdrequests = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['user', 'faculty', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await odrequestService.queryOdrequests(filter, options);
  res.send(result);
});

const updateOdrequest = catchAsync(async (req: Request, res: Response) => {
  const odrequest = await odrequestService.updateOdrequestById(
    req.params.odrequestId,
    req.body
  );
  res.send(odrequest);
});

const deleteOdrequest = catchAsync(async (req: Request, res: Response) => {
  await odrequestService.deleteOdrequestById(req.params.odrequestId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createOdrequest,
  getOdrequest,
  getOdrequests,
  updateOdrequest,
  deleteOdrequest,
};
