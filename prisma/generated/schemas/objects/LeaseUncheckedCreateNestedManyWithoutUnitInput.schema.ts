import { z } from 'zod';
import { LeaseCreateWithoutUnitInputObjectSchema } from './LeaseCreateWithoutUnitInput.schema';
import { LeaseUncheckedCreateWithoutUnitInputObjectSchema } from './LeaseUncheckedCreateWithoutUnitInput.schema';
import { LeaseCreateOrConnectWithoutUnitInputObjectSchema } from './LeaseCreateOrConnectWithoutUnitInput.schema';
import { LeaseCreateManyUnitInputEnvelopeObjectSchema } from './LeaseCreateManyUnitInputEnvelope.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUncheckedCreateNestedManyWithoutUnitInput> =
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
      createMany: z
        .lazy(() => LeaseCreateManyUnitInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LeaseWhereUniqueInputObjectSchema),
          z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LeaseUncheckedCreateNestedManyWithoutUnitInputObjectSchema =
  Schema;
