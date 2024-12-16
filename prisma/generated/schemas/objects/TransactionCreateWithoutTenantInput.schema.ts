import { z } from 'zod';
import { LeaseCreateNestedOneWithoutTransactionInputObjectSchema } from './LeaseCreateNestedOneWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateWithoutTenantInput> = z
  .object({
    description: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
    lease: z.lazy(
      () => LeaseCreateNestedOneWithoutTransactionInputObjectSchema,
    ),
  })
  .strict();

export const TransactionCreateWithoutTenantInputObjectSchema = Schema;
