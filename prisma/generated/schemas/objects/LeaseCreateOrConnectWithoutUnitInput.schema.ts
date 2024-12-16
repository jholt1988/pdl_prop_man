import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseCreateWithoutUnitInputObjectSchema } from './LeaseCreateWithoutUnitInput.schema';
import { LeaseUncheckedCreateWithoutUnitInputObjectSchema } from './LeaseUncheckedCreateWithoutUnitInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateOrConnectWithoutUnitInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutUnitInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutUnitInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseCreateOrConnectWithoutUnitInputObjectSchema = Schema;
