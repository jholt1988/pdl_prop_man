import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    electric: z.literal(true).optional(),
    gas: z.literal(true).optional(),
    water: z.literal(true).optional(),
    leaseId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UtilitiesCountAggregateInputObjectSchema = Schema;
