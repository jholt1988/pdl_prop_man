import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    address: z.literal(true).optional(),
    numUnits: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PropertyCountAggregateInputObjectSchema = Schema;
