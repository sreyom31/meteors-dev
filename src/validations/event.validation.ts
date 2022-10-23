import z from 'zod';
import { Types } from 'mongoose';

const createEvent = z.object({
  body: z
    .object({
      slug: z.string().trim(),
      desc: z.string().trim(),
      imageCover: z.string().trim(),
      hostingClub: z.string(),
      prizes: z.array(z.string().trim()),
      registrationFee: z.number(),
      speakers: z.array(z.string().trim()),
      venue: z.string().trim(),
      forTeacher: z.boolean(),
      forStudent: z.boolean(),
      tracks: z.array(z.string().trim()),
      isActive: z.boolean(),
      maxCount: z.number(),
      availableCount: z.number(),
    })
    .partial(),
});

const getEvents = z.object({
  query: z
    .object({
      slug: z.string().trim(),
      hostingClub: z.string(),
      venue: z.string().trim(),
      forTeacher: z.boolean(),
      forStudent: z.boolean(),
      isActive: z.boolean(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getEvent = z.object({
  params: z.object({
    eventId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid event id',
        path: ['Event Query'],
      }),
  }),
});

const updateEvent = z.object({
  params: z.object({
    eventId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid event id',
        path: ['Event update'],
      }),
  }),
  body: z
    .object({
      slug: z.string().trim(),
      desc: z.string().trim(),
      imageCover: z.string().trim(),
      hostingClub: z.string(),
      prizes: z.array(z.string().trim()),
      registrationFee: z.number(),
      speakers: z.array(z.string().trim()),
      venue: z.string().trim(),
      forTeacher: z.boolean(),
      forStudent: z.boolean(),
      tracks: z.array(z.string().trim()),
      isActive: z.boolean(),
      maxCount: z.number(),
      availableCount: z.number(),
    })
    .partial()
    .refine((event) => Object.keys(event).length, {
      message: 'No fields to update',
      path: ['Event update'],
    }),
});

const deleteEvent = z.object({
  params: z.object({
    eventId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid event id',
        path: ['Event delete'],
      }),
  }),
});

export default {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent,
};
