import { z } from 'zod';
import { LeaseCreateNestedOneWithoutUtilitiesInputObjectSchema } from './LeaseCreateNestedOneWithoutUtilitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesCreateInput> = z
  .object({
    electric: z.boolean(),
    gas: z.boolean(),
    water: z.boolean(),
    lease: z
      .lazy(() => LeaseCreateNestedOneWithoutUtilitiesInputObjectSchema)
      .optional(),
  })
  .strict();

export const UtilitiesCreateInputObjectSchema = Schema;
