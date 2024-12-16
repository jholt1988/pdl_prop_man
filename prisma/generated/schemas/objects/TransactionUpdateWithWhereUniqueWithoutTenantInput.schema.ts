import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutTenantInputObjectSchema } from './TransactionUpdateWithoutTenantInput.schema';
import { TransactionUncheckedUpdateWithoutTenantInputObjectSchema } from './TransactionUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionUpdateWithoutTenantInputObjectSchema),
        z.lazy(() => TransactionUncheckedUpdateWithoutTenantInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionUpdateWithWhereUniqueWithoutTenantInputObjectSchema =
  Schema;
