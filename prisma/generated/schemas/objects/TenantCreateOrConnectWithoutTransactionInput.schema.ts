import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutTransactionInputObjectSchema } from './TenantCreateWithoutTransactionInput.schema';
import { TenantUncheckedCreateWithoutTransactionInputObjectSchema } from './TenantUncheckedCreateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateOrConnectWithoutTransactionInput> = z
  .object({
    where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TenantCreateWithoutTransactionInputObjectSchema),
      z.lazy(() => TenantUncheckedCreateWithoutTransactionInputObjectSchema),
    ]),
  })
  .strict();

export const TenantCreateOrConnectWithoutTransactionInputObjectSchema = Schema;
