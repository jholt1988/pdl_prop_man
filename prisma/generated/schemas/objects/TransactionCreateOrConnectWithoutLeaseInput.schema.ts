import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionCreateWithoutLeaseInputObjectSchema } from './TransactionCreateWithoutLeaseInput.schema';
import { TransactionUncheckedCreateWithoutLeaseInputObjectSchema } from './TransactionUncheckedCreateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutLeaseInput> = z
  .object({
    where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TransactionCreateWithoutLeaseInputObjectSchema),
      z.lazy(() => TransactionUncheckedCreateWithoutLeaseInputObjectSchema),
    ]),
  })
  .strict();

export const TransactionCreateOrConnectWithoutLeaseInputObjectSchema = Schema;
