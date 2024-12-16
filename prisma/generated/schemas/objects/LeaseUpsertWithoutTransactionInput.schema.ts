import { z } from 'zod';
import { LeaseUpdateWithoutTransactionInputObjectSchema } from './LeaseUpdateWithoutTransactionInput.schema';
import { LeaseUncheckedUpdateWithoutTransactionInputObjectSchema } from './LeaseUncheckedUpdateWithoutTransactionInput.schema';
import { LeaseCreateWithoutTransactionInputObjectSchema } from './LeaseCreateWithoutTransactionInput.schema';
import { LeaseUncheckedCreateWithoutTransactionInputObjectSchema } from './LeaseUncheckedCreateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpsertWithoutTransactionInput> = z
  .object({
    update: z.union([
      z.lazy(() => LeaseUpdateWithoutTransactionInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateWithoutTransactionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutTransactionInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutTransactionInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpsertWithoutTransactionInputObjectSchema = Schema;
