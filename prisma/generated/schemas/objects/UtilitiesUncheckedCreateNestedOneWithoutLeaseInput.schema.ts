import { z } from 'zod';
import { UtilitiesCreateWithoutLeaseInputObjectSchema } from './UtilitiesCreateWithoutLeaseInput.schema';
import { UtilitiesUncheckedCreateWithoutLeaseInputObjectSchema } from './UtilitiesUncheckedCreateWithoutLeaseInput.schema';
import { UtilitiesCreateOrConnectWithoutLeaseInputObjectSchema } from './UtilitiesCreateOrConnectWithoutLeaseInput.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './UtilitiesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesUncheckedCreateNestedOneWithoutLeaseInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UtilitiesCreateWithoutLeaseInputObjectSchema),
          z.lazy(() => UtilitiesUncheckedCreateWithoutLeaseInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UtilitiesCreateOrConnectWithoutLeaseInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UtilitiesWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UtilitiesUncheckedCreateNestedOneWithoutLeaseInputObjectSchema =
  Schema;
