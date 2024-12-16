import { z } from 'zod';
import { TenantCreateWithoutTransactionInputObjectSchema } from './TenantCreateWithoutTransactionInput.schema';
import { TenantUncheckedCreateWithoutTransactionInputObjectSchema } from './TenantUncheckedCreateWithoutTransactionInput.schema';
import { TenantCreateOrConnectWithoutTransactionInputObjectSchema } from './TenantCreateOrConnectWithoutTransactionInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantCreateNestedOneWithoutTransactionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TenantCreateWithoutTransactionInputObjectSchema),
        z.lazy(() => TenantUncheckedCreateWithoutTransactionInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TenantCreateOrConnectWithoutTransactionInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TenantCreateNestedOneWithoutTransactionInputObjectSchema = Schema;
