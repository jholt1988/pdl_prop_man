import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateInput> = z
  .object({
    description: z.string(),
    category: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
  })
  .strict();

export const ExpenseCreateInputObjectSchema = Schema;
