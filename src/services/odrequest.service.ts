import httpStatus from 'http-status';
import { Odrequest, OdrequestUpdate } from '../shared/customTypes';
import OdrequestModel from '../models/odrequests/odrequest.model';
import ApiError from '../utils/ApiError';

const createOdrequest = async (odrequestBody: Odrequest) => {
  return OdrequestModel.create(odrequestBody);
};

const getOdrequestById = async (id: string) => OdrequestModel.findById(id);

const queryOdrequests = async (filter: any, options: any) => {
  const odrequests = await OdrequestModel.paginate(filter, options);
  return odrequests;
};

const updateOdrequestById = async (
  odrequestId: string,
  updateBody: OdrequestUpdate
) => {
  const odrequest = await getOdrequestById(odrequestId);
  if (!odrequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Odrequest not found');
  }
  Object.assign(odrequest, updateBody);
  await odrequest.save();
  return odrequest;
};

const deleteOdrequestById = async (odrequestId: string) => {
  const odrequest = await getOdrequestById(odrequestId);
  if (!odrequest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Odrequest not found');
  }
  await odrequest.remove();
  return odrequest;
};

export default {
  createOdrequest,
  getOdrequestById,
  queryOdrequests,
  updateOdrequestById,
  deleteOdrequestById,
};
