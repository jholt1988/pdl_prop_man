import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateManyInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    category: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
  })
  .strict();

export const ExpenseCreateManyInputObjectSchema = Schema;
