import { z } from 'zod';
import { TenantUpdateWithoutTransactionInputObjectSchema } from './TenantUpdateWithoutTransactionInput.schema';
import { TenantUncheckedUpdateWithoutTransactionInputObjectSchema } from './TenantUncheckedUpdateWithoutTransactionInput.schema';
import { TenantCreateWithoutTransactionInputObjectSchema } from './TenantCreateWithoutTransactionInput.schema';
import { TenantUncheckedCreateWithoutTransactionInputObjectSchema } from './TenantUncheckedCreateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpsertWithoutTransactionInput> = z
  .object({
    update: z.union([
      z.lazy(() => TenantUpdateWithoutTransactionInputObjectSchema),
      z.lazy(() => TenantUncheckedUpdateWithoutTransactionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TenantCreateWithoutTransactionInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutTransactionInputObjectSchema),
    ]),
  })
  .strict();

export const TenantUpsertWithoutTransactionInputObjectSchema = Schema;
