import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutUnitInputObjectSchema } from './LeaseUpdateWithoutUnitInput.schema';
import { LeaseUncheckedUpdateWithoutUnitInputObjectSchema } from './LeaseUncheckedUpdateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpdateWithWhereUniqueWithoutUnitInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LeaseUpdateWithoutUnitInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateWithoutUnitInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpdateWithWhereUniqueWithoutUnitInputObjectSchema = Schema;
