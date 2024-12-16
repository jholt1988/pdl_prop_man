import { z } from 'zod';
import { PropertyCreateWithoutUnitsInputObjectSchema } from './PropertyCreateWithoutUnitsInput.schema';
import { PropertyUncheckedCreateWithoutUnitsInputObjectSchema } from './PropertyUncheckedCreateWithoutUnitsInput.schema';
import { PropertyCreateOrConnectWithoutUnitsInputObjectSchema } from './PropertyCreateOrConnectWithoutUnitsInput.schema';
import { PropertyUpsertWithoutUnitsInputObjectSchema } from './PropertyUpsertWithoutUnitsInput.schema';
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema';
import { PropertyUpdateWithoutUnitsInputObjectSchema } from './PropertyUpdateWithoutUnitsInput.schema';
import { PropertyUncheckedUpdateWithoutUnitsInputObjectSchema } from './PropertyUncheckedUpdateWithoutUnitsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpdateOneRequiredWithoutUnitsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutUnitsInputObjectSchema),
          z.lazy(() => PropertyUncheckedCreateWithoutUnitsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PropertyCreateOrConnectWithoutUnitsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PropertyUpsertWithoutUnitsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithoutUnitsInputObjectSchema),
          z.lazy(() => PropertyUncheckedUpdateWithoutUnitsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PropertyUpdateOneRequiredWithoutUnitsNestedInputObjectSchema =
  Schema;
