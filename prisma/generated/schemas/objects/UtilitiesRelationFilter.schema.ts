import { z } from 'zod';
import { UtilitiesWhereInputObjectSchema } from './UtilitiesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UtilitiesRelationFilter> = z
  .object({
    is: z
      .lazy(() => UtilitiesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UtilitiesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UtilitiesRelationFilterObjectSchema = Schema;
