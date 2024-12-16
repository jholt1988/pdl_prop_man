import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    leaseId: z.literal(true).optional(),
  })
  .strict();

export const UtilitiesAvgAggregateInputObjectSchema = Schema;
