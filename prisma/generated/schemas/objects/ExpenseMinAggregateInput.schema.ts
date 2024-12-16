import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    category: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    date: z.literal(true).optional(),
  })
  .strict();

export const ExpenseMinAggregateInputObjectSchema = Schema;
