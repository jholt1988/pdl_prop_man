import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateManyInput> = z
  .object({
    id: z.number().optional(),
    unitNumber: z.number(),
    sqft: z.string(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    propertyStatus: z.string(),
    propertyId: z.number(),
  })
  .strict();

export const UnitCreateManyInputObjectSchema = Schema;
