import { z } from 'zod';
import { TenantCreateNestedOneWithoutTransactionInputObjectSchema } from './TenantCreateNestedOneWithoutTransactionInput.schema';
import { LeaseCreateNestedOneWithoutTransactionInputObjectSchema } from './LeaseCreateNestedOneWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateInput> = z
  .object({
    description: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
    tenant: z.lazy(
      () => TenantCreateNestedOneWithoutTransactionInputObjectSchema,
    ),
    lease: z.lazy(
      () => LeaseCreateNestedOneWithoutTransactionInputObjectSchema,
    ),
  })
  .strict();

export const TransactionCreateInputObjectSchema = Schema;
