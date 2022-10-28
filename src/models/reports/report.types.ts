import { Document, Model, Types } from 'mongoose';

export interface IReport {
  title: string;
  description: string;
  user: Types.ObjectId;
  faculty: Types.ObjectId;
  event: Types.ObjectId;  
  status: string;
  file: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IReportDocument extends IReport, Document {
  setLastUpdated: (this: IReportDocument) => Promise<void>;
}

export interface IReportModel extends Model<IReportDocument> {
  paginate: (
    filter: any,
    options: any
  ) => {
    results: any;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: any;
  };
}
