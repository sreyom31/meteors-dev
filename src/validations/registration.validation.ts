import z from 'zod';
import { Types } from 'mongoose';

const createRegistration = z.object({
  body: z
    .object({
      user: z.string(),
      event: z.string(),
      isPresent: z.boolean(),
      isRefreshment: z.boolean(),
      certificate: z.string(),
      isActive: z.boolean(),
    })
    .partial(),
});

const getRegistrations = z.object({
  query: z
    .object({
      user: z.string(),
      event: z.string(),
      isPresent: z.boolean(),
      isRefreshment: z.boolean(),
      certificate: z.string(),
      isActive: z.boolean(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getRegistration = z.object({
  params: z.object({
    registrationId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid registration id',
        path: ['Registration Query'],
      }),
  }),
});

const updateRegistration = z.object({
  params: z.object({
    registrationId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid registration id',
        path: ['Registration update'],
      }),
  }),
  body: z
    .object({
      user: z.string(),
      event: z.string(),
      isPresent: z.boolean(),
      isRefreshment: z.boolean(),
      certificate: z.string(),
      isActive: z.boolean(),
    })
    .partial(),
});

const deleteRegistration = z.object({
  params: z.object({
    registrationId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid registration id',
        path: ['Registration delete'],
      }),
  }),
});

export default {
  createRegistration,
  getRegistrations,
  getRegistration,
  updateRegistration,
  deleteRegistration,
};
