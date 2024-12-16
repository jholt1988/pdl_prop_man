import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutLeaseInputObjectSchema } from './TransactionUpdateWithoutLeaseInput.schema';
import { TransactionUncheckedUpdateWithoutLeaseInputObjectSchema } from './TransactionUncheckedUpdateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutLeaseInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TransactionUpdateWithoutLeaseInputObjectSchema),
        z.lazy(() => TransactionUncheckedUpdateWithoutLeaseInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionUpdateWithWhereUniqueWithoutLeaseInputObjectSchema =
  Schema;
