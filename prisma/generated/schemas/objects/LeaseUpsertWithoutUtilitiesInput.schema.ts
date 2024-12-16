import { z } from 'zod';
import { LeaseUpdateWithoutUtilitiesInputObjectSchema } from './LeaseUpdateWithoutUtilitiesInput.schema';
import { LeaseUncheckedUpdateWithoutUtilitiesInputObjectSchema } from './LeaseUncheckedUpdateWithoutUtilitiesInput.schema';
import { LeaseCreateWithoutUtilitiesInputObjectSchema } from './LeaseCreateWithoutUtilitiesInput.schema';
import { LeaseUncheckedCreateWithoutUtilitiesInputObjectSchema } from './LeaseUncheckedCreateWithoutUtilitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseUpsertWithoutUtilitiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => LeaseUpdateWithoutUtilitiesInputObjectSchema),
      z.lazy(() => LeaseUncheckedUpdateWithoutUtilitiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LeaseCreateWithoutUtilitiesInputObjectSchema),
      z.lazy(() => LeaseUncheckedCreateWithoutUtilitiesInputObjectSchema),
    ]),
  })
  .strict();

export const LeaseUpsertWithoutUtilitiesInputObjectSchema = Schema;
