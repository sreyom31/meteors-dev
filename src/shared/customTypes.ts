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
  forTeacher: boolean;
  forStudent: boolean;
  tracks: string[];
  isActive: boolean;
  maxCount: number;
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
  forTeacher?: boolean;
  forStudent?: boolean;
  tracks?: string[];
  isActive?: boolean;
  maxCount?: number;
};

export type Registration = {
  user: string;
  event: string;
  isPresent?: boolean;
  isRefreshment?: boolean;
  isActive?: boolean;
  certificate?: string;
};

export type RegistrationUpdate = {
  user?: string;
  event?: string;
  isPresent?: boolean;
  isRefreshment?: boolean;
  isActive?: boolean;
  certificate?: string;
};
