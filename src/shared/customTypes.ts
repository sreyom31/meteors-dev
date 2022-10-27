export type User = {
  name: string;
  email: string;
  password: string;
  dept: string;
  role: string;
};

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
  dept?: string;
  role?: string;
};

export type Event = {
  slug: string;
  desc: string;
  imageCover: string;
  hostingClub: string;
  prizes: string[];
  registrationFee: number;
  speakers: string[];
  venue: string;
  date: string;
  time: string;
  forTeacher: boolean;
  forStudent: boolean;
  tracks: string[];
  isActive: boolean;
  maxCount: number;
  availableCount: number;
};

export type EventUpdate = {
  slug?: string;
  desc?: string;
  imageCover?: string;
  hostingClub?: string;
  prizes?: string[];
  registrationFee?: number;
  speakers?: string[];
  venue?: string;
  date?: string;
  time?: string;
  forTeacher?: boolean;
  forStudent?: boolean;
  tracks?: string[];
  isActive?: boolean;
  maxCount?: number;
  availableCount?: number;
};

export type Registration = {
  user: string;
  event: string;
  isPresent?: boolean;
  isRefreshment?: boolean;
  isActive?: boolean;
  certificate?: string;
  qrCode?: string;
};

export type RegistrationUpdate = {
  user?: string;
  event?: string;
  isPresent?: boolean;
  isRefreshment?: boolean;
  isActive?: boolean;
  certificate?: string;
};

export type Odrequest = {
  title: string;
  description: string;
  user: string;
  faculty: string;
  status: string;
  file: string;
};

export type OdrequestUpdate = {
  title: string;
  description: string;
  user: string;
  faculty: string;
  status?: string;
  file: string;
};

export type Report = {
  title: string;
  description: string;
  user: string;
  faculty: string;
  status: string;
  file: string;
};

export type ReportUpdate = {
  title: string;
  description: string;
  user: string;
  faculty: string;
  status?: string;
  file: string;
};
