import z from 'zod';
import { Types } from 'mongoose';

const createOdrequest = z.object({
  body: z.object({
    user: z.string(),
    faculty: z.string(),
    status: z.string(),
    title: z.string(),
    description: z.string(),
    file: z.string(),
  }),
});

const getOdrequests = z.object({
  query: z
    .object({
      user: z.string(),
      faculty: z.string(),
      status: z.string(),
      title: z.string(),
      description: z.string(),
      file: z.string(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getOdrequest = z.object({
  params: z.object({
    odrequestId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid odrequest id',
        path: ['ODRequest Query'],
      }),
  }),
});

const updateOdrequest = z.object({
  params: z.object({
    odrequestId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid odrequest id',
        path: ['ODRequest update'],
      }),
  }),
  body: z
    .object({
      user: z.string(),
      faculty: z.string(),
      status: z.string(),
      title: z.string(),
      description: z.string(),
      file: z.string(),
    })
    .partial(),
});

const deleteOdrequest = z.object({
  params: z.object({
    odrequestId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid odrequest id',
        path: ['ODRequest delete'],
      }),
  }),
});

export {
  createOdrequest,
  getOdrequests,
  getOdrequest,
  updateOdrequest,
  deleteOdrequest,
};
