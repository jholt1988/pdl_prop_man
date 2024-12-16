import { z } from 'zod';
import { LeaseCreateWithoutUnitInputObjectSchema } from './LeaseCreateWithoutUnitInput.schema';
import { LeaseUncheckedCreateWithoutUnitInputObjectSchema } from './LeaseUncheckedCreateWithoutUnitInput.schema';
import { LeaseCreateOrConnectWithoutUnitInputObjectSchema } from './LeaseCreateOrConnectWithoutUnitInput.schema';
import { LeaseUpsertWithWhereUniqueWithoutUnitInputObjectSchema } from './LeaseUpsertWithWhereUniqueWithoutUnitInput.schema';
import { LeaseCreateManyUnitInputEnvelopeObjectSchema } from './LeaseCreateManyUnitInputEnvelope.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithWhereUniqueWithoutUnitInputObjectSchema } from './LeaseUpdateWithWhereUniqueWithoutUnitInput.schema';
import { LeaseUpdateManyWithWhereWithoutUnitInputObjectSchema } from './LeaseUpdateManyWithWhereWithoutUnitInput.schema';
import { LeaseScalarWhereInputObjectSchema } from './LeaseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUncheckedUpdateManyWithoutUnitNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LeaseCreateWithoutUnitInputObjectSchema),
          z.lazy(() => LeaseCreateWithoutUnitInputObjectSchema).array(),
          z.lazy(() => LeaseUncheckedCreateWithoutUnitInputObjectSchema),
          z
            .lazy(() => LeaseUncheckedCreateWithoutUnitInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LeaseCreateOrConnectWithoutUnitInputObjectSchema),
          z
            .lazy(() => LeaseCreateOrConnectWithoutUnitInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LeaseUpsertWithWhereUniqueWithoutUnitInputObjectSchema),
          z
            .lazy(() => LeaseUpsertWithWhereUniqueWithoutUnitInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LeaseCreateManyUnitInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LeaseWhereUniqueInputObjectSchema),
          z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LeaseWhereUniqueInputObjectSchema),
          z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LeaseWhereUniqueInputObjectSchema),
          z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LeaseWhereUniqueInputObjectSchema),
          z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LeaseUpdateWithWhereUniqueWithoutUnitInputObjectSchema),
          z
            .lazy(() => LeaseUpdateWithWhereUniqueWithoutUnitInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LeaseUpdateManyWithWhereWithoutUnitInputObjectSchema),
          z
            .lazy(() => LeaseUpdateManyWithWhereWithoutUnitInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LeaseScalarWhereInputObjectSchema),
          z.lazy(() => LeaseScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LeaseUncheckedUpdateManyWithoutUnitNestedInputObjectSchema =
  Schema;
