import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitUpdateWithoutPropertyInputObjectSchema } from './UnitUpdateWithoutPropertyInput.schema';
import { UnitUncheckedUpdateWithoutPropertyInputObjectSchema } from './UnitUncheckedUpdateWithoutPropertyInput.schema';
import { UnitCreateWithoutPropertyInputObjectSchema } from './UnitCreateWithoutPropertyInput.schema';
import { UnitUncheckedCreateWithoutPropertyInputObjectSchema } from './UnitUncheckedCreateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpsertWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => UnitWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UnitUpdateWithoutPropertyInputObjectSchema),
        z.lazy(() => UnitUncheckedUpdateWithoutPropertyInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UnitCreateWithoutPropertyInputObjectSchema),
        z.lazy(() => UnitUncheckedCreateWithoutPropertyInputObjectSchema),
      ]),
    })
    .strict();

export const UnitUpsertWithWhereUniqueWithoutPropertyInputObjectSchema = Schema;
