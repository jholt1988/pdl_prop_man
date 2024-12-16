import { z } from 'zod';
import { LeaseCreateWithoutTransactionInputObjectSchema } from './LeaseCreateWithoutTransactionInput.schema';
import { LeaseUncheckedCreateWithoutTransactionInputObjectSchema } from './LeaseUncheckedCreateWithoutTransactionInput.schema';
import { LeaseCreateOrConnectWithoutTransactionInputObjectSchema } from './LeaseCreateOrConnectWithoutTransactionInput.schema';
import { LeaseUpsertWithoutTransactionInputObjectSchema } from './LeaseUpsertWithoutTransactionInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutTransactionInputObjectSchema } from './LeaseUpdateWithoutTransactionInput.schema';
import { LeaseUncheckedUpdateWithoutTransactionInputObjectSchema } from './LeaseUncheckedUpdateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateOneRequiredWithoutTransactionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LeaseCreateWithoutTransactionInputObjectSchema),
          z.lazy(() => LeaseUncheckedCreateWithoutTransactionInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LeaseCreateOrConnectWithoutTransactionInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => LeaseUpsertWithoutTransactionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => LeaseWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => LeaseUpdateWithoutTransactionInputObjectSchema),
          z.lazy(() => LeaseUncheckedUpdateWithoutTransactionInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const LeaseUpdateOneRequiredWithoutTransactionNestedInputObjectSchema =
  Schema;
