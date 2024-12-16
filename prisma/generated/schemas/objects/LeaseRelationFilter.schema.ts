import { z } from 'zod';
import { LeaseWhereInputObjectSchema } from './LeaseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LeaseRelationFilter> = z
  .object({
    is: z
      .lazy(() => LeaseWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => LeaseWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const LeaseRelationFilterObjectSchema = Schema;
