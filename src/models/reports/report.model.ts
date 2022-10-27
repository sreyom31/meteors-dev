import { model } from 'mongoose';
import { IReportDocument, IReportModel } from './report.types';
import ReportSchema from './report.schema';

const ReportModel = model<IReportDocument, IReportModel>(
  'report',
  ReportSchema
);
export default ReportModel;
