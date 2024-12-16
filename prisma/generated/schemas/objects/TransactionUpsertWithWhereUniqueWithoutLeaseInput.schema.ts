import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutLeaseInputObjectSchema } from './TransactionUpdateWithoutLeaseInput.schema';
import { TransactionUncheckedUpdateWithoutLeaseInputObjectSchema } from './TransactionUncheckedUpdateWithoutLeaseInput.schema';
import { TransactionCreateWithoutLeaseInputObjectSchema } from './TransactionCreateWithoutLeaseInput.schema';
import { TransactionUncheckedCreateWithoutLeaseInputObjectSchema } from './TransactionUncheckedCreateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutLeaseInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TransactionUpdateWithoutLeaseInputObjectSchema),
        z.lazy(() => TransactionUncheckedUpdateWithoutLeaseInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TransactionCreateWithoutLeaseInputObjectSchema),
        z.lazy(() => TransactionUncheckedCreateWithoutLeaseInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionUpsertWithWhereUniqueWithoutLeaseInputObjectSchema =
  Schema;
