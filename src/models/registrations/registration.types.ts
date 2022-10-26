import { Document, Model, Types } from 'mongoose';

export interface IRegistration {
  user: Types.ObjectId;
  event: Types.ObjectId;
  isPresent: boolean;
  isRefreshment: boolean;
  certificate: string;
  isActive: boolean;
  qrCode: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IRegistrationDocument extends IRegistration, Document {
  setLastUpdated: (this: IRegistrationDocument) => Promise<void>;
}

export interface IRegistrationModel extends Model<IRegistrationDocument> {
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
