import { z } from 'zod';
import { PropertyCreateWithoutLeaseInputObjectSchema } from './PropertyCreateWithoutLeaseInput.schema';
import { PropertyUncheckedCreateWithoutLeaseInputObjectSchema } from './PropertyUncheckedCreateWithoutLeaseInput.schema';
import { PropertyCreateOrConnectWithoutLeaseInputObjectSchema } from './PropertyCreateOrConnectWithoutLeaseInput.schema';
import { PropertyUpsertWithoutLeaseInputObjectSchema } from './PropertyUpsertWithoutLeaseInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';
import { PropertyUpdateWithoutLeaseInputObjectSchema } from './PropertyUpdateWithoutLeaseInput.schema';
import { PropertyUncheckedUpdateWithoutLeaseInputObjectSchema } from './PropertyUncheckedUpdateWithoutLeaseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpdateOneRequiredWithoutLeaseNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutLeaseInputObjectSchema),
          z.lazy(() => PropertyUncheckedCreateWithoutLeaseInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PropertyCreateOrConnectWithoutLeaseInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PropertyUpsertWithoutLeaseInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithoutLeaseInputObjectSchema),
          z.lazy(() => PropertyUncheckedUpdateWithoutLeaseInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PropertyUpdateOneRequiredWithoutLeaseNestedInputObjectSchema =
  Schema;
