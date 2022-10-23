import { Document, Model } from 'mongoose';

export interface IEvent {
  slug: string;
  desc: string;
  imageCover: string;
  hostingClub: string;
  prizes: string[];
  registrationFee: number;
  speakers: string[];
  venue: string;
  forTeacher: boolean;
  forStudent: boolean;
  tracks: string[];
  isActive: boolean;
  maxCount: number;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IEventDocument extends IEvent, Document {
  setLastUpdated: (this: IEventDocument) => Promise<void>;
}

export interface IEventModel extends Model<IEventDocument> {
  isSlugTaken: (
    this: IEventModel,
    slug: string,
    excludeId?: string
  ) => Promise<boolean>;
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
