import httpStatus from 'http-status';
import { Registration, RegistrationUpdate } from '../shared/customTypes';
import RegistrationModel from '../models/registrations/registration.model';
import ApiError from '../utils/ApiError';

const createRegistration = async (registrationBody: Registration) => {
  return RegistrationModel.create(registrationBody);
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
