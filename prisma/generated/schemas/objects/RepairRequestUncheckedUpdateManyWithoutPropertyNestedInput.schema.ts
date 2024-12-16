import { z } from 'zod';
import { RepairRequestCreateWithoutPropertyInputObjectSchema } from './RepairRequestCreateWithoutPropertyInput.schema';
import { RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema } from './RepairRequestUncheckedCreateWithoutPropertyInput.schema';
import { RepairRequestCreateOrConnectWithoutPropertyInputObjectSchema } from './RepairRequestCreateOrConnectWithoutPropertyInput.schema';
import { RepairRequestUpsertWithWhereUniqueWithoutPropertyInputObjectSchema } from './RepairRequestUpsertWithWhereUniqueWithoutPropertyInput.schema';
import { RepairRequestCreateManyPropertyInputEnvelopeObjectSchema } from './RepairRequestCreateManyPropertyInputEnvelope.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithWhereUniqueWithoutPropertyInputObjectSchema } from './RepairRequestUpdateWithWhereUniqueWithoutPropertyInput.schema';
import { RepairRequestUpdateManyWithWhereWithoutPropertyInputObjectSchema } from './RepairRequestUpdateManyWithWhereWithoutPropertyInput.schema';
import { RepairRequestScalarWhereInputObjectSchema } from './RepairRequestScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUncheckedUpdateManyWithoutPropertyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RepairRequestCreateWithoutPropertyInputObjectSchema),
          z
            .lazy(() => RepairRequestCreateWithoutPropertyInputObjectSchema)
            .array(),
          z.lazy(
            () => RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUncheckedCreateWithoutPropertyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RepairRequestCreateOrConnectWithoutPropertyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestCreateOrConnectWithoutPropertyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RepairRequestUpsertWithWhereUniqueWithoutPropertyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpsertWithWhereUniqueWithoutPropertyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RepairRequestCreateManyPropertyInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema),
          z.lazy(() => RepairRequestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RepairRequestUpdateWithWhereUniqueWithoutPropertyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpdateWithWhereUniqueWithoutPropertyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RepairRequestUpdateManyWithWhereWithoutPropertyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpdateManyWithWhereWithoutPropertyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RepairRequestScalarWhereInputObjectSchema),
          z.lazy(() => RepairRequestScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RepairRequestUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema =
  Schema;
