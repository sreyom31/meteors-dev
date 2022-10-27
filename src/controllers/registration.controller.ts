import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { registrationService } from '../services';

const createRegistration = catchAsync(async (req: Request, res: Response) => {
  const registration = await registrationService.createRegistration(req.body);
  res.status(httpStatus.CREATED).send(registration);
});

const getRegistration = catchAsync(async (req: Request, res: Response) => {
  const registration = await registrationService.getRegistrationById(
    req.params.registrationId
  );
  if (!registration) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Registration not found');
  }
  res.send(registration);
});

const getRegistrations = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, [
    'user',
    'event',
    'isActive',
    'isRefreshment',
  ]);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await registrationService.queryRegistrations(filter, options);
  res.send(result);
});

const updateRegistration = catchAsync(async (req: Request, res: Response) => {
  const registration = await registrationService.updateRegistrationById(
    req.params.registrationId,
    req.body
  );
  res.send(registration);
});

const deleteRegistration = catchAsync(async (req: Request, res: Response) => {
  await registrationService.deleteRegistrationById(req.params.registrationId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createRegistration,
  getRegistration,
  getRegistrations,
  updateRegistration,
  deleteRegistration,
};
