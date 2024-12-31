import { z } from 'zod';
import { LeaseCreateNestedOneWithoutTransactionInputObjectSchema } from './LeaseCreateNestedOneWithoutTransactionInput.schema';
import { TenantCreateNestedOneWithoutTransactionInputObjectSchema } from './TenantCreateNestedOneWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateInput> = z
  .object({
    description: z.string(),
    amount: z.number(),
    date: z.coerce.date(),
    lease: z.lazy(
      () => LeaseCreateNestedOneWithoutTransactionInputObjectSchema,
    ),
    tenant: z.lazy(
      () => TenantCreateNestedOneWithoutTransactionInputObjectSchema,
    ),
  })
  .strict();

export const TransactionCreateInputObjectSchema = Schema;
