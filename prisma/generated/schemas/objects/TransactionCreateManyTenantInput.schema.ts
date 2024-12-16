import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManyTenantInput> = z
  .object({
    id: z.number().optional(),
    leaseId: z.number(),
    description: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
  })
  .strict();

export const TransactionCreateManyTenantInputObjectSchema = Schema;
