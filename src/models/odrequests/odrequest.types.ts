import { Document, Model, Types } from 'mongoose';

export interface IOdrequest {
  title: string;
  description: string;
  user: Types.ObjectId;
  faculty: Types.ObjectId;
  status: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IOdrequestDocument extends IOdrequest, Document {
  setLastUpdated: (this: IOdrequestDocument) => Promise<void>;
}

export interface IOdrequestModel extends Model<IOdrequestDocument> {
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
