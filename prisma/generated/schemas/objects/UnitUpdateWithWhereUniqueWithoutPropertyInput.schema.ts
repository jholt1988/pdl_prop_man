import { z } from 'zod';
import { UnitWhereUniqueInputObjectSchema } from './UnitWhereUniqueInput.schema';
import { UnitUpdateWithoutPropertyInputObjectSchema } from './UnitUpdateWithoutPropertyInput.schema';
import { UnitUncheckedUpdateWithoutPropertyInputObjectSchema } from './UnitUncheckedUpdateWithoutPropertyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateWithWhereUniqueWithoutPropertyInput> =
  z
    .object({
      where: z.lazy(() => UnitWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UnitUpdateWithoutPropertyInputObjectSchema),
        z.lazy(() => UnitUncheckedUpdateWithoutPropertyInputObjectSchema),
      ]),
    })
    .strict();

export const UnitUpdateWithWhereUniqueWithoutPropertyInputObjectSchema = Schema;
