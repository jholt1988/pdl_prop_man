import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    utilitiesId: z.number().optional(),
  })
  .strict();

export const LeaseWhereUniqueInputObjectSchema = Schema;
