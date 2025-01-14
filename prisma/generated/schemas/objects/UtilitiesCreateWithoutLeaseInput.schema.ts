import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesCreateWithoutLeaseInput> = z
  .object({
    electric: z.boolean(),
    gas: z.boolean(),
    water: z.boolean(),
  })
  .strict();

export const UtilitiesCreateWithoutLeaseInputObjectSchema = Schema;
