import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseUpdateWithoutUnitInputObjectSchema } from './LeaseUpdateWithoutUnitInput.schema';
import { LeaseUncheckedUpdateWithoutUnitInputObjectSchema } from './LeaseUncheckedUpdateWithoutUnitInput.schema';
import { LeaseCreateWithoutUnitInputObjectSchema } from './LeaseCreateWithoutUnitInput.schema';
import { LeaseUncheckedCreateWithoutUnitInputObjectSchema } from './LeaseUncheckedCreateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpsertWithWhereUniqueWithoutUnitInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LeaseUpdateWithoutUnitInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateWithoutUnitInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutUnitInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutUnitInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpsertWithWhereUniqueWithoutUnitInputObjectSchema = Schema;
