import { z } from 'zod';
import { RepairRequestCreateWithoutVendorInputObjectSchema } from './RepairRequestCreateWithoutVendorInput.schema';
import { RepairRequestUncheckedCreateWithoutVendorInputObjectSchema } from './RepairRequestUncheckedCreateWithoutVendorInput.schema';
import { RepairRequestCreateOrConnectWithoutVendorInputObjectSchema } from './RepairRequestCreateOrConnectWithoutVendorInput.schema';
import { RepairRequestUpsertWithWhereUniqueWithoutVendorInputObjectSchema } from './RepairRequestUpsertWithWhereUniqueWithoutVendorInput.schema';
import { RepairRequestCreateManyVendorInputEnvelopeObjectSchema } from './RepairRequestCreateManyVendorInputEnvelope.schema';
import { RepairRequestWhereUniqueInputObjectSchema } from './RepairRequestWhereUniqueInput.schema';
import { RepairRequestUpdateWithWhereUniqueWithoutVendorInputObjectSchema } from './RepairRequestUpdateWithWhereUniqueWithoutVendorInput.schema';
import { RepairRequestUpdateManyWithWhereWithoutVendorInputObjectSchema } from './RepairRequestUpdateManyWithWhereWithoutVendorInput.schema';
import { RepairRequestScalarWhereInputObjectSchema } from './RepairRequestScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RepairRequestUpdateManyWithoutVendorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RepairRequestCreateWithoutVendorInputObjectSchema),
          z
            .lazy(() => RepairRequestCreateWithoutVendorInputObjectSchema)
            .array(),
          z.lazy(
            () => RepairRequestUncheckedCreateWithoutVendorInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestUncheckedCreateWithoutVendorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RepairRequestCreateOrConnectWithoutVendorInputObjectSchema,
          ),
          z
            .lazy(
              () => RepairRequestCreateOrConnectWithoutVendorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RepairRequestUpsertWithWhereUniqueWithoutVendorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpsertWithWhereUniqueWithoutVendorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RepairRequestCreateManyVendorInputEnvelopeObjectSchema)
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
              RepairRequestUpdateWithWhereUniqueWithoutVendorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpdateWithWhereUniqueWithoutVendorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RepairRequestUpdateManyWithWhereWithoutVendorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RepairRequestUpdateManyWithWhereWithoutVendorInputObjectSchema,
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

export const RepairRequestUpdateManyWithoutVendorNestedInputObjectSchema =
  Schema;
