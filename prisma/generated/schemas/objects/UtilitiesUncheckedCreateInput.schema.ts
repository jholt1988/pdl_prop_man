import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    electric: z.boolean(),
    gas: z.boolean(),
    water: z.boolean(),
    leaseId: z.number(),
  })
  .strict();

export const UtilitiesUncheckedCreateInputObjectSchema = Schema;
