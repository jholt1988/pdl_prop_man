import { z } from 'zod';
import { UnitCreateWithoutPropertyInputObjectSchema } from './UnitCreateWithoutPropertyInput.schema';
import { UnitUncheckedCreateWithoutPropertyInputObjectSchema } from './UnitUncheckedCreateWithoutPropertyInput.schema';
import { UnitCreateOrConnectWithoutPropertyInputObjectSchema } from './UnitCreateOrConnectWithoutPropertyInput.schema';
import { UnitCreateManyPropertyInputEnvelopeObjectSchema } from './UnitCreateManyPropertyInputEnvelope.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitCreateNestedManyWithoutPropertyInput> = z
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
    createMany: z
      .lazy(() => UnitCreateManyPropertyInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UnitWhereUniqueInputObjectSchema),
        z.lazy(() => UnitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UnitCreateNestedManyWithoutPropertyInputObjectSchema = Schema;
