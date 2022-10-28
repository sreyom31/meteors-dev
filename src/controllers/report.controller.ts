import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/CatchAsync';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import { reportService } from '../services';

const createReport = catchAsync(async (req: Request, res: Response) => {
  const report = await reportService.createReport(req.body);
  if (req.file) report.file = req.file.filename;
  report.save();
  res.status(httpStatus.CREATED).send(report);
});

const getReport = catchAsync(async (req: Request, res: Response) => {
  const report = await reportService.getReportById(req.params.reportId);
  if (!report) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Report not found');
  }
  res.send(report);
});

const getReports = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['user', 'faculty', 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await reportService.queryReports(filter, options);
  res.send(result);
});

const downloadReport = catchAsync(async (req: Request, res: Response) => {
  const report = await reportService.getReportById(req.params.reportId);
  if (!report) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Report not found');
  }
  res.download(`${__dirname}/../public/reports/${report.file}`);
});

const updateReport = catchAsync(async (req: Request, res: Response) => {
  const report = await reportService.updateReportById(
    req.params.reportId,
    req.body
  );
  res.send(report);
});

const deleteReport = catchAsync(async (req: Request, res: Response) => {
  await reportService.deleteReportById(req.params.reportId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createReport,
  getReport,
  getReports,
  downloadReport,
  updateReport,
  deleteReport,
};
