import { z } from 'zod';
import { UnitUpdateWithoutLeasesInputObjectSchema } from './UnitUpdateWithoutLeasesInput.schema';
import { UnitUncheckedUpdateWithoutLeasesInputObjectSchema } from './UnitUncheckedUpdateWithoutLeasesInput.schema';
import { UnitCreateWithoutLeasesInputObjectSchema } from './UnitCreateWithoutLeasesInput.schema';
import { UnitUncheckedCreateWithoutLeasesInputObjectSchema } from './UnitUncheckedCreateWithoutLeasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpsertWithoutLeasesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UnitUpdateWithoutLeasesInputObjectSchema),
      z.lazy(() => UnitUncheckedUpdateWithoutLeasesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UnitCreateWithoutLeasesInputObjectSchema),
      z.lazy(() => UnitUncheckedCreateWithoutLeasesInputObjectSchema),
    ]),
  })
  .strict();

export const UnitUpsertWithoutLeasesInputObjectSchema = Schema;
