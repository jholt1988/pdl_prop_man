import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    leaseId: z.number().optional(),
  })
  .strict();

export const UtilitiesWhereUniqueInputObjectSchema = Schema;
