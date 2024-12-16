import { z } from 'zod';
import { RepairRequestCreateWithoutUnitInputObjectSchema } from './RepairRequestCreateWithoutUnitInput.schema';
import { RepairRequestUncheckedCreateWithoutUnitInputObjectSchema } from './RepairRequestUncheckedCreateWithoutUnitInput.schema';
import { RepairRequestCreateOrConnectWithoutUnitInputObjectSchema } from './RepairRequestCreateOrConnectWithoutUnitInput.schema';
import { RepairRequestUpsertWithWhereUniqueWithoutUnitInputObjectSchema } from './RepairRequestUpsertWithWhereUniqueWithoutUnitInput.schema';
import { RepairRequestCreateManyUnitInputEnvelopeObjectSchema } from './RepairRequestCreateManyUnitInputEnvelope.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithWhereUniqueWithoutUnitInputObjectSchema } from './RepairRequestUpdateWithWhereUniqueWithoutUnitInput.schema';
import { RepairRequestUpdateManyWithWhereWithoutUnitInputObjectSchema } from './RepairRequestUpdateManyWithWhereWithoutUnitInput.schema';
import { RepairRequestScalarWhereInputObjectSchema } from './RepairRequestScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateManyWithoutUnitNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RepairRequestCreateWithoutUnitInputObjectSchema),
          z.lazy(() => RepairRequestCreateWithoutUnitInputObjectSchema).array(),
          z.lazy(
            () => RepairRequestUncheckedCreateWithoutUnitInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestUncheckedCreateWithoutUnitInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RepairRequestCreateOrConnectWithoutUnitInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestCreateOrConnectWithoutUnitInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RepairRequestUpsertWithWhereUniqueWithoutUnitInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpsertWithWhereUniqueWithoutUnitInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RepairRequestCreateManyUnitInputEnvelopeObjectSchema)
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
              RepairRequestUpdateWithWhereUniqueWithoutUnitInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpdateWithWhereUniqueWithoutUnitInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RepairRequestUpdateManyWithWhereWithoutUnitInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpdateManyWithWhereWithoutUnitInputObjectSchema,
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

export const RepairRequestUpdateManyWithoutUnitNestedInputObjectSchema = Schema;
