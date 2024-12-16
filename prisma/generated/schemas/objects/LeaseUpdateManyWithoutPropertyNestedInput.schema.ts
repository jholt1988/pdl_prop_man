import { z } from 'zod';
import { LeaseCreateWithoutPropertyInputObjectSchema } from './LeaseCreateWithoutPropertyInput.schema';
import { LeaseUncheckedCreateWithoutPropertyInputObjectSchema } from './LeaseUncheckedCreateWithoutPropertyInput.schema';
import { LeaseCreateOrConnectWithoutPropertyInputObjectSchema } from './LeaseCreateOrConnectWithoutPropertyInput.schema';
import { LeaseUpsertWithWhereUniqueWithoutPropertyInputObjectSchema } from './LeaseUpsertWithWhereUniqueWithoutPropertyInput.schema';
import { LeaseCreateManyPropertyInputEnvelopeObjectSchema } from './LeaseCreateManyPropertyInputEnvelope.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithWhereUniqueWithoutPropertyInputObjectSchema } from './LeaseUpdateWithWhereUniqueWithoutPropertyInput.schema';
import { LeaseUpdateManyWithWhereWithoutPropertyInputObjectSchema } from './LeaseUpdateManyWithWhereWithoutPropertyInput.schema';
import { LeaseScalarWhereInputObjectSchema } from './LeaseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateManyWithoutPropertyNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LeaseCreateWithoutPropertyInputObjectSchema),
        z.lazy(() => LeaseCreateWithoutPropertyInputObjectSchema).array(),
        z.lazy(() => LeaseUncheckedCreateWithoutPropertyInputObjectSchema),
        z
          .lazy(() => LeaseUncheckedCreateWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LeaseCreateOrConnectWithoutPropertyInputObjectSchema),
        z
          .lazy(() => LeaseCreateOrConnectWithoutPropertyInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => LeaseUpsertWithWhereUniqueWithoutPropertyInputObjectSchema,
        ),
        z
          .lazy(
            () => LeaseUpsertWithWhereUniqueWithoutPropertyInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LeaseCreateManyPropertyInputEnvelopeObjectSchema)
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
        z.lazy(
          () => LeaseUpdateWithWhereUniqueWithoutPropertyInputObjectSchema,
        ),
        z
          .lazy(
            () => LeaseUpdateWithWhereUniqueWithoutPropertyInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LeaseUpdateManyWithWhereWithoutPropertyInputObjectSchema),
        z
          .lazy(() => LeaseUpdateManyWithWhereWithoutPropertyInputObjectSchema)
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

export const LeaseUpdateManyWithoutPropertyNestedInputObjectSchema = Schema;
