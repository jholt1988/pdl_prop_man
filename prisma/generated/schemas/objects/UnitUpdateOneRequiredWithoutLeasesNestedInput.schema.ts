import { z } from 'zod';
import { UnitCreateWithoutLeasesInputObjectSchema } from './UnitCreateWithoutLeasesInput.schema';
import { UnitUncheckedCreateWithoutLeasesInputObjectSchema } from './UnitUncheckedCreateWithoutLeasesInput.schema';
import { UnitCreateOrConnectWithoutLeasesInputObjectSchema } from './UnitCreateOrConnectWithoutLeasesInput.schema';
import { UnitUpsertWithoutLeasesInputObjectSchema } from './UnitUpsertWithoutLeasesInput.schema';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitUpdateWithoutLeasesInputObjectSchema } from './UnitUpdateWithoutLeasesInput.schema';
import { UnitUncheckedUpdateWithoutLeasesInputObjectSchema } from './UnitUncheckedUpdateWithoutLeasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateOneRequiredWithoutLeasesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UnitCreateWithoutLeasesInputObjectSchema),
          z.lazy(() => UnitUncheckedCreateWithoutLeasesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UnitCreateOrConnectWithoutLeasesInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => UnitUpsertWithoutLeasesInputObjectSchema).optional(),
      connect: z.lazy(() => UnitWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UnitUpdateWithoutLeasesInputObjectSchema),
          z.lazy(() => UnitUncheckedUpdateWithoutLeasesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UnitUpdateOneRequiredWithoutLeasesNestedInputObjectSchema = Schema;
