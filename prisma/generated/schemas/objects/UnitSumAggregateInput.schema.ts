import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    unitNumber: z.literal(true).optional(),
    bedrooms: z.literal(true).optional(),
    bathrooms: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
  })
  .strict();

export const UnitSumAggregateInputObjectSchema = Schema;
