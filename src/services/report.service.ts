import httpStatus from 'http-status';
import { Report, ReportUpdate } from '../shared/customTypes';
import ReportModel from '../models/reports/report.model';
import ApiError from '../utils/ApiError';

const createReport = async (reportBody: Report) => {
  return ReportModel.create(reportBody);
};

const getReportById = async (id: string) => ReportModel.findById(id);

const queryReports = async (filter: any, options: any) => {
  const reports = await ReportModel.paginate(filter, options);
  return reports;
};

const updateReportById = async (reportId: string, updateBody: ReportUpdate) => {
  const report = await getReportById(reportId);
  if (!report) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Report not found');
  }
  Object.assign(report, updateBody);
  await report.save();
  return report;
};

const deleteReportById = async (reportId: string) => {
  const report = await getReportById(reportId);
  if (!report) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Report not found');
  }
  await report.remove();
  return report;
};

export default {
  createReport,
  getReportById,
  queryReports,
  updateReportById,
  deleteReportById,
};
