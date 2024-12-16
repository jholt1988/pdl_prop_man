import { z } from 'zod';
import { TenantCreateNestedOneWithoutTransactionInputObjectSchema } from './TenantCreateNestedOneWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateWithoutLeaseInput> = z
  .object({
    description: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
    tenant: z.lazy(
      () => TenantCreateNestedOneWithoutTransactionInputObjectSchema,
    ),
  })
  .strict();

export const TransactionCreateWithoutLeaseInputObjectSchema = Schema;
