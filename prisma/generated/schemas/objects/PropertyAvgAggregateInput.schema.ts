import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    numUnits: z.literal(true).optional(),
  })
  .strict();

export const PropertyAvgAggregateInputObjectSchema = Schema;
