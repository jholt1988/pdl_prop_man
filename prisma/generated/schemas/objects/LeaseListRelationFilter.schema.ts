import { z } from 'zod';
import { LeaseWhereInputObjectSchema } from './LeaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseListRelationFilter> = z
  .object({
    every: z.lazy(() => LeaseWhereInputObjectSchema).optional(),
    some: z.lazy(() => LeaseWhereInputObjectSchema).optional(),
    none: z.lazy(() => LeaseWhereInputObjectSchema).optional(),
  })
  .strict();

export const LeaseListRelationFilterObjectSchema = Schema;
