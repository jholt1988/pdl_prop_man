import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutLeaseInput> = z
  .object({
    id: z.number().optional(),
    tenantId: z.number(),
    description: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
  })
  .strict();

export const TransactionUncheckedCreateWithoutLeaseInputObjectSchema = Schema;