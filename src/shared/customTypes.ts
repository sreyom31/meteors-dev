export type User = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
  domain?: string;
  designation?: string;
  isEmailVerified?: boolean;
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
