import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tenantId: z.literal(true).optional(),
    leaseId: z.literal(true).optional(),
    description: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    date: z.literal(true).optional(),
  })
  .strict();

export const TransactionMaxAggregateInputObjectSchema = Schema;
