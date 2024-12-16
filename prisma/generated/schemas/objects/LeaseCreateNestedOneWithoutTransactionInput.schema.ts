import { z } from 'zod';
import { LeaseCreateWithoutTransactionInputObjectSchema } from './LeaseCreateWithoutTransactionInput.schema';
import { LeaseUncheckedCreateWithoutTransactionInputObjectSchema } from './LeaseUncheckedCreateWithoutTransactionInput.schema';
import { LeaseCreateOrConnectWithoutTransactionInputObjectSchema } from './LeaseCreateOrConnectWithoutTransactionInput.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateNestedOneWithoutTransactionInput> = z
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
    connect: z.lazy(() => LeaseWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const LeaseCreateNestedOneWithoutTransactionInputObjectSchema = Schema;
