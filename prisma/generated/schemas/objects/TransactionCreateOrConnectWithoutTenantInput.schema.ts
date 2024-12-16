import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionCreateWithoutTenantInputObjectSchema } from './TransactionCreateWithoutTenantInput.schema';
import { TransactionUncheckedCreateWithoutTenantInputObjectSchema } from './TransactionUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutTenantInput> = z
  .object({
    where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TransactionCreateWithoutTenantInputObjectSchema),
      z.lazy(() => TransactionUncheckedCreateWithoutTenantInputObjectSchema),
    ]),
  })
  .strict();

export const TransactionCreateOrConnectWithoutTenantInputObjectSchema = Schema;
