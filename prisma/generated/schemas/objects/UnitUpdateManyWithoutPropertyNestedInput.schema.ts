import { z } from 'zod';
import { UnitCreateWithoutPropertyInputObjectSchema } from './UnitCreateWithoutPropertyInput.schema';
import { UnitUncheckedCreateWithoutPropertyInputObjectSchema } from './UnitUncheckedCreateWithoutPropertyInput.schema';
import { UnitCreateOrConnectWithoutPropertyInputObjectSchema } from './UnitCreateOrConnectWithoutPropertyInput.schema';
import { UnitUpsertWithWhereUniqueWithoutPropertyInputObjectSchema } from './UnitUpsertWithWhereUniqueWithoutPropertyInput.schema';
import { UnitCreateManyPropertyInputEnvelopeObjectSchema } from './UnitCreateManyPropertyInputEnvelope.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitUpdateWithWhereUniqueWithoutPropertyInputObjectSchema } from './UnitUpdateWithWhereUniqueWithoutPropertyInput.schema';
import { UnitUpdateManyWithWhereWithoutPropertyInputObjectSchema } from './UnitUpdateManyWithWhereWithoutPropertyInput.schema';
import { UnitScalarWhereInputObjectSchema } from './UnitScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateManyWithoutPropertyNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UnitCreateWithoutPropertyInputObjectSchema),
        z.lazy(() => UnitCreateWithoutPropertyInputObjectSchema).array(),
        z.lazy(() => UnitUncheckedCreateWithoutPropertyInputObjectSchema),
        z
          .lazy(() => UnitUncheckedCreateWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UnitCreateOrConnectWithoutPropertyInputObjectSchema),
        z
          .lazy(() => UnitCreateOrConnectWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => UnitUpsertWithWhereUniqueWithoutPropertyInputObjectSchema),
        z
          .lazy(() => UnitUpsertWithWhereUniqueWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UnitCreateManyPropertyInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UnitWhereUniqueInputObjectSchema),
        z.lazy(() => UnitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UnitWhereUniqueInputObjectSchema),
        z.lazy(() => UnitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UnitWhereUniqueInputObjectSchema),
        z.lazy(() => UnitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UnitWhereUniqueInputObjectSchema),
        z.lazy(() => UnitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UnitUpdateWithWhereUniqueWithoutPropertyInputObjectSchema),
        z
          .lazy(() => UnitUpdateWithWhereUniqueWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UnitUpdateManyWithWhereWithoutPropertyInputObjectSchema),
        z
          .lazy(() => UnitUpdateManyWithWhereWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UnitScalarWhereInputObjectSchema),
        z.lazy(() => UnitScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UnitUpdateManyWithoutPropertyNestedInputObjectSchema = Schema;
