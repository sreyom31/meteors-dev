import z from 'zod';
import { Types } from 'mongoose';

const createReport = z.object({
  body: z
    .object({
      title: z.string(),
      description: z.string(),
      user: z.string(),
      faculty: z.string(),
      status: z.string(),
      file: z.string(),
    })
    .partial(),
});

const getReports = z.object({
  query: z
    .object({
      title: z.string(),
      description: z.string(),
      user: z.string(),
      faculty: z.string(),
      status: z.string(),
      file: z.string(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getReport = z.object({
  params: z.object({
    reportId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid report id',
        path: ['Report Query'],
      }),
  }),
});

const updateReport = z.object({
  params: z.object({
    reportId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid report id',
        path: ['Report update'],
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

const deleteReport = z.object({
  params: z.object({
    reportId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid report id',
        path: ['Report delete'],
      }),
  }),
});

export default {
  createReport,
  getReports,
  getReport,
  updateReport,
  deleteReport,
};
