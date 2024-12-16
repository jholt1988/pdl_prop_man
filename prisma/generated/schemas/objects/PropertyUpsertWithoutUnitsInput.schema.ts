import { z } from 'zod';
import { PropertyUpdateWithoutUnitsInputObjectSchema } from './PropertyUpdateWithoutUnitsInput.schema';
import { PropertyUncheckedUpdateWithoutUnitsInputObjectSchema } from './PropertyUncheckedUpdateWithoutUnitsInput.schema';
import { PropertyCreateWithoutUnitsInputObjectSchema } from './PropertyCreateWithoutUnitsInput.schema';
import { PropertyUncheckedCreateWithoutUnitsInputObjectSchema } from './PropertyUncheckedCreateWithoutUnitsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyUpsertWithoutUnitsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutUnitsInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutUnitsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutUnitsInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutUnitsInputObjectSchema),
    ]),
  })
  .strict();

export const PropertyUpsertWithoutUnitsInputObjectSchema = Schema;
