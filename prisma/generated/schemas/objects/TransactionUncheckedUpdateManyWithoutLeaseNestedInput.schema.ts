import { z } from 'zod';
import { TransactionCreateWithoutLeaseInputObjectSchema } from './TransactionCreateWithoutLeaseInput.schema';
import { TransactionUncheckedCreateWithoutLeaseInputObjectSchema } from './TransactionUncheckedCreateWithoutLeaseInput.schema';
import { TransactionCreateOrConnectWithoutLeaseInputObjectSchema } from './TransactionCreateOrConnectWithoutLeaseInput.schema';
import { TransactionUpsertWithWhereUniqueWithoutLeaseInputObjectSchema } from './TransactionUpsertWithWhereUniqueWithoutLeaseInput.schema';
import { TransactionCreateManyLeaseInputEnvelopeObjectSchema } from './TransactionCreateManyLeaseInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithWhereUniqueWithoutLeaseInputObjectSchema } from './TransactionUpdateWithWhereUniqueWithoutLeaseInput.schema';
import { TransactionUpdateManyWithWhereWithoutLeaseInputObjectSchema } from './TransactionUpdateManyWithWhereWithoutLeaseInput.schema';
import { TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutLeaseNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => TransactionUpsertWithWhereUniqueWithoutLeaseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpsertWithWhereUniqueWithoutLeaseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TransactionCreateManyLeaseInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TransactionWhereUniqueInputObjectSchema),
          z.lazy(() => TransactionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => TransactionUpdateWithWhereUniqueWithoutLeaseInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpdateWithWhereUniqueWithoutLeaseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TransactionUpdateManyWithWhereWithoutLeaseInputObjectSchema,
          ),
          z
            .lazy(
              () => TransactionUpdateManyWithWhereWithoutLeaseInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TransactionScalarWhereInputObjectSchema),
          z.lazy(() => TransactionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TransactionUncheckedUpdateManyWithoutLeaseNestedInputObjectSchema =
  Schema;
