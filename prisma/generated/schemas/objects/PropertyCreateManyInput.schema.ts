import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PropertyCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    address: z.string(),
    numUnits: z.number(),
  })
  .strict();

export const PropertyCreateManyInputObjectSchema = Schema;
