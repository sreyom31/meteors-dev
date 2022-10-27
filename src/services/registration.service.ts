import httpStatus from 'http-status';
import { Registration, RegistrationUpdate } from '../shared/customTypes';
import RegistrationModel from '../models/registrations/registration.model';
import ApiError from '../utils/ApiError';
import eventService from './event.service';
import Email from '../utils/email';
import userService from './user.service';

const createRegistration = async (registrationBody: Registration) => {
  await eventService.changeCount(registrationBody.event, 'subtract');
  const user = await userService.getUserById(registrationBody.user);
  const event = await eventService.getEventById(registrationBody.event);
  const registration = await RegistrationModel.create(registrationBody);
  await new Email().sendUserRegister(user, event, registration.qrCode);
  return registration;
};

const getRegistrationById = async (id: string) =>
  RegistrationModel.findById(id);

const queryRegistrations = async (filter: any, options: any) => {
  const registrations = await RegistrationModel.paginate(filter, options);
  return registrations;
};

const updateRegistrationById = async (
  registrationId: string,
  updateBody: RegistrationUpdate
) => {
  const registration = await getRegistrationById(registrationId);
  if (!registration) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Registration not found');
  }
  Object.assign(registration, updateBody);
  await registration.save();
  return registration;
};

const deleteRegistrationById = async (registrationId: string) => {
  const registration = await getRegistrationById(registrationId);
  await eventService.changeCount(registration.event, 'add');
  if (!registration) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Registration not found');
  }
  await registration.remove();
  return registration;
};

export default {
  createRegistration,
  getRegistrationById,
  queryRegistrations,
  updateRegistrationById,
  deleteRegistrationById,
};
