import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutTenantInputObjectSchema } from './TransactionUpdateWithoutTenantInput.schema';
import { TransactionUncheckedUpdateWithoutTenantInputObjectSchema } from './TransactionUncheckedUpdateWithoutTenantInput.schema';
import { TransactionCreateWithoutTenantInputObjectSchema } from './TransactionCreateWithoutTenantInput.schema';
import { TransactionUncheckedCreateWithoutTenantInputObjectSchema } from './TransactionUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TransactionUpdateWithoutTenantInputObjectSchema),
        z.lazy(() => TransactionUncheckedUpdateWithoutTenantInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TransactionCreateWithoutTenantInputObjectSchema),
        z.lazy(() => TransactionUncheckedCreateWithoutTenantInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionUpsertWithWhereUniqueWithoutTenantInputObjectSchema =
  Schema;
