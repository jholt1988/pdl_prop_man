import { z } from 'zod';
import { TransactionCreateWithoutTenantInputObjectSchema } from './TransactionCreateWithoutTenantInput.schema';
import { TransactionUncheckedCreateWithoutTenantInputObjectSchema } from './TransactionUncheckedCreateWithoutTenantInput.schema';
import { TransactionCreateOrConnectWithoutTenantInputObjectSchema } from './TransactionCreateOrConnectWithoutTenantInput.schema';
import { TransactionUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './TransactionUpsertWithWhereUniqueWithoutTenantInput.schema';
import { TransactionCreateManyTenantInputEnvelopeObjectSchema } from './TransactionCreateManyTenantInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './TransactionUpdateWithWhereUniqueWithoutTenantInput.schema';
import { TransactionUpdateManyWithWhereWithoutTenantInputObjectSchema } from './TransactionUpdateManyWithWhereWithoutTenantInput.schema';
import { TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateManyWithoutTenantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TransactionCreateWithoutTenantInputObjectSchema),
          z.lazy(() => TransactionCreateWithoutTenantInputObjectSchema).array(),
          z.lazy(
            () => TransactionUncheckedCreateWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TransactionUncheckedCreateWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TransactionCreateOrConnectWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () => TransactionCreateOrConnectWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TransactionUpsertWithWhereUniqueWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpsertWithWhereUniqueWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TransactionCreateManyTenantInputEnvelopeObjectSchema)
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
            () =>
              TransactionUpdateWithWhereUniqueWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpdateWithWhereUniqueWithoutTenantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TransactionUpdateManyWithWhereWithoutTenantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TransactionUpdateManyWithWhereWithoutTenantInputObjectSchema,
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

export const TransactionUpdateManyWithoutTenantNestedInputObjectSchema = Schema;
