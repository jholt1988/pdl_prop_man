import { z } from 'zod';
import { TransactionCreateWithoutLeaseInputObjectSchema } from './TransactionCreateWithoutLeaseInput.schema';
import { TransactionUncheckedCreateWithoutLeaseInputObjectSchema } from './TransactionUncheckedCreateWithoutLeaseInput.schema';
import { TransactionCreateOrConnectWithoutLeaseInputObjectSchema } from './TransactionCreateOrConnectWithoutLeaseInput.schema';
import { TransactionCreateManyLeaseInputEnvelopeObjectSchema } from './TransactionCreateManyLeaseInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutLeaseInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TransactionCreateWithoutLeaseInputObjectSchema),
        z.lazy(() => TransactionCreateWithoutLeaseInputObjectSchema).array(),
        z.lazy(() => TransactionUncheckedCreateWithoutLeaseInputObjectSchema),
        z
          .lazy(() => TransactionUncheckedCreateWithoutLeaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TransactionCreateOrConnectWithoutLeaseInputObjectSchema),
        z
          .lazy(() => TransactionCreateOrConnectWithoutLeaseInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TransactionCreateManyLeaseInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TransactionWhereUniqueInputObjectSchema),
        z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TransactionCreateNestedManyWithoutLeaseInputObjectSchema = Schema;
