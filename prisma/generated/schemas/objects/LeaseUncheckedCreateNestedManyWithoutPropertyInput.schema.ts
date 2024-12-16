import { z } from 'zod';
import { LeaseCreateWithoutPropertyInputObjectSchema } from './LeaseCreateWithoutPropertyInput.schema';
import { LeaseUncheckedCreateWithoutPropertyInputObjectSchema } from './LeaseUncheckedCreateWithoutPropertyInput.schema';
import { LeaseCreateOrConnectWithoutPropertyInputObjectSchema } from './LeaseCreateOrConnectWithoutPropertyInput.schema';
import { LeaseCreateManyPropertyInputEnvelopeObjectSchema } from './LeaseCreateManyPropertyInputEnvelope.schema';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUncheckedCreateNestedManyWithoutPropertyInput> =
  z
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
      createMany: z
        .lazy(() => LeaseCreateManyPropertyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LeaseWhereUniqueInputObjectSchema),
          z.lazy(() => LeaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LeaseUncheckedCreateNestedManyWithoutPropertyInputObjectSchema =
  Schema;
