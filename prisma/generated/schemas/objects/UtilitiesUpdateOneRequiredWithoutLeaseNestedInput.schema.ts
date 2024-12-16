import { z } from 'zod';
import { UtilitiesCreateWithoutLeaseInputObjectSchema } from './UtilitiesCreateWithoutLeaseInput.schema';
import { UtilitiesUncheckedCreateWithoutLeaseInputObjectSchema } from './UtilitiesUncheckedCreateWithoutLeaseInput.schema';
import { UtilitiesCreateOrConnectWithoutLeaseInputObjectSchema } from './UtilitiesCreateOrConnectWithoutLeaseInput.schema';
import { UtilitiesUpsertWithoutLeaseInputObjectSchema } from './UtilitiesUpsertWithoutLeaseInput.schema';
import { UtilitiesWhereUniqueInputObjectSchema } from './UtilitiesWhereUniqueInput.schema';
import { UtilitiesUpdateWithoutLeaseInputObjectSchema } from './UtilitiesUpdateWithoutLeaseInput.schema';
import { UtilitiesUncheckedUpdateWithoutLeaseInputObjectSchema } from './UtilitiesUncheckedUpdateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesUpdateOneRequiredWithoutLeaseNestedInput> =
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
      upsert: z
        .lazy(() => UtilitiesUpsertWithoutLeaseInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UtilitiesWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UtilitiesUpdateWithoutLeaseInputObjectSchema),
          z.lazy(() => UtilitiesUncheckedUpdateWithoutLeaseInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UtilitiesUpdateOneRequiredWithoutLeaseNestedInputObjectSchema =
  Schema;
