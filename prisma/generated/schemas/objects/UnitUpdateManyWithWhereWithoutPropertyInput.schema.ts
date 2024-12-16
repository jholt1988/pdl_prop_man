import { z } from 'zod';
import { UnitScalarWhereInputObjectSchema } from './UnitScalarWhereInput.schema';
import { UnitUpdateManyMutationInputObjectSchema } from './UnitUpdateManyMutationInput.schema';
import { UnitUncheckedUpdateManyWithoutUnitsInputObjectSchema } from './UnitUncheckedUpdateManyWithoutUnitsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UnitUpdateManyWithWhereWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => UnitScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UnitUpdateManyMutationInputObjectSchema),
      z.lazy(() => UnitUncheckedUpdateManyWithoutUnitsInputObjectSchema),
    ]),
  })
  .strict();

export const UnitUpdateManyWithWhereWithoutPropertyInputObjectSchema = Schema;
