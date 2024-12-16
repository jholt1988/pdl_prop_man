import { z } from 'zod';
import { LeaseWhereUniqueInputObjectSchema } from './LeaseWhereUniqueInput.schema';
import { LeaseCreateWithoutUtilitiesInputObjectSchema } from './LeaseCreateWithoutUtilitiesInput.schema';
import { LeaseUncheckedCreateWithoutUtilitiesInputObjectSchema } from './LeaseUncheckedCreateWithoutUtilitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseCreateOrConnectWithoutUtilitiesInput> = z
  .object({
    where: z.lazy(() => LeaseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutUtilitiesInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutUtilitiesInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseCreateOrConnectWithoutUtilitiesInputObjectSchema = Schema;
