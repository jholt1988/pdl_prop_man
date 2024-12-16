import { z } from 'zod';
import { TenantCreateWithoutTransactionInputObjectSchema } from './TenantCreateWithoutTransactionInput.schema';
import { TenantUncheckedCreateWithoutTransactionInputObjectSchema } from './TenantUncheckedCreateWithoutTransactionInput.schema';
import { TenantCreateOrConnectWithoutTransactionInputObjectSchema } from './TenantCreateOrConnectWithoutTransactionInput.schema';
import { TenantUpsertWithoutTransactionInputObjectSchema } from './TenantUpsertWithoutTransactionInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutTransactionInputObjectSchema } from './TenantUpdateWithoutTransactionInput.schema';
import { TenantUncheckedUpdateWithoutTransactionInputObjectSchema } from './TenantUncheckedUpdateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutTransactionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantCreateWithoutTransactionInputObjectSchema),
          z.lazy(
            () => TenantUncheckedCreateWithoutTransactionInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TenantCreateOrConnectWithoutTransactionInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TenantUpsertWithoutTransactionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TenantUpdateWithoutTransactionInputObjectSchema),
          z.lazy(
            () => TenantUncheckedUpdateWithoutTransactionInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TenantUpdateOneRequiredWithoutTransactionNestedInputObjectSchema =
  Schema;
